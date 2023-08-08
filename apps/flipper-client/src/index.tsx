import React from "react";
import {
  createState,
  usePlugin,
  useValue,
  theme,
  PluginClient,
  Layout,
  DetailSidebar,
} from "flipper-plugin";

import { Button, Input, TabsProps, Typography } from "antd";
const { Search } = Input;
// (3)
type AdobeDataRow = {
  id: number;
  analyticsTag: string;
  eventType: string;
  date: Date;
};

type LockedStateRow = {
  id: number;
  date: Date;
  newState: string;
};
// (2)
type Events = {
  lockedStateRow: LockedStateRow;
  adobeDataRow: AdobeDataRow;
};
type Methods = {
  toggleLock(params: {}): Promise<string[]>;
  characterNav(params: { id: string }): Promise<string[]>;
};
// (1)
export function plugin(client: PluginClient<Events, Methods>) {
  // (5)
  const lockedStateRows = createState<Record<string, LockedStateRow>>(
    {},
    { persist: "lockedStateRow" }
  );
  const adobeRows = createState<Record<string, AdobeDataRow>>(
    {},
    { persist: "adobeDatarOWS" }
  );
  const selectedID = createState<string | null>(null, { persist: "selection" });

  // (6)
  client.onMessage("lockedStateRow", (row) => {
    lockedStateRows.update((draft) => {
      draft[row.id] = row;
    });
  });

  client.onMessage("adobeDataRow", (row) => {
    adobeRows.update((draft) => {
      draft[row.id] = row;
    });
  });

  function setSelection(id: number) {
    selectedID.set("" + id);
  }

  function toggleDeviceLockPress() {
    client.send("toggleLock", {});
  }

  function navigateToCharacter(characterId: string) {
    client.send("characterNav", { id: characterId });
  }

  // (4)
  return {
    lockedStateRows,
    adobeRows,
    selectedID,
    setSelection,
    toggleDeviceLockPress,
    navigateToCharacter,
  };
}

function AdobeAnalyticsData(adobeRows: Record<string, AdobeDataRow>) {
  return (
    <Layout.ScrollContainer
      vertical
      style={{ background: theme.backgroundWash }}
    >
      {Object.entries(adobeRows).map(([id, row]) => (
        <h2 key={id}>
          <div>
            {row.date.toString()} analyticsTag: "{row.analyticsTag}" eventType :
            "{row.eventType}"
          </div>
        </h2>
      ))}
    </Layout.ScrollContainer>
  );
}

// (1)
export function Component() {
  // (2)
  const instance = usePlugin(plugin);
  // (3)
  const lockedStateRows = useValue(instance.lockedStateRows);
  const adobeRows = useValue(instance.adobeRows);

  function renderSidebar() {
    return (
      <Layout.Container gap pad>
        <Button
          type="primary"
          onClick={() => {
            instance.toggleDeviceLockPress();
          }}
        >
          Toggle Device Lock
        </Button>
        <Search
          placeholder="character id"
          allowClear
          enterButton="Navigate to character"
          size="large"
          onSearch={(value) => {
            if (value) {
              instance.navigateToCharacter(value);
            }
          }}
        />
      </Layout.Container>
    );
  }

  function lockedStateData() {
    return (
      <Layout.ScrollContainer
        vertical
        style={{ background: theme.backgroundWash }}
      >
        {Object.entries(lockedStateRows).map(([id, row]) => (
          <h2 key={id}>
            {row.date.toString()} App state changed to : {row.newState}{" "}
          </h2>
        ))}
      </Layout.ScrollContainer>
    );
  }

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Pin Locking Status`,
      children: "hello",
    },
    {
      key: "2",
      label: `Adobe Analytics Events`,
      children: "world",
    },
  ];
  // (4)
  return (
    <>
      <>
        {AdobeAnalyticsData(adobeRows)}
        {lockedStateData()}
      </>
      <DetailSidebar>{renderSidebar()}</DetailSidebar>
    </>
  );
}

