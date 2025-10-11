export type SubCommandParams = {
  subCommand?: string | undefined;
  commandParam?: string | undefined;
};

export type ParsedCommand = SubCommandParams & {
  commandType: string;
};