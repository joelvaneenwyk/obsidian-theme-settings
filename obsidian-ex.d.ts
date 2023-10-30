import 'obsidian';

// allows for the removal of the any cast by defining some extra properties for Typescript so it knows these properties exist
declare module 'obsidian' {
  export interface ObsidianCommandInterface {
    executeCommandById(id: string): void;
    commands: {
      'editor:save-file': {
        callback(): void;
      };
    };
    listCommands(): Command[];
  }

  interface App {
    commands: ObsidianCommandInterface;
    dom: {
      appContainerEl: HTMLElement;
    };
  }

  interface Vault {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getConfig(id: string): any;
  }
}
