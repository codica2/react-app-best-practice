import { schema } from "normalizr";

export const specialist = new schema.Entity("specialists");

export const channel = new schema.Entity("channels", {
  specialists: [specialist]
});

export const channels = new schema.Entity(
  "channels",
  {},
  {
    processStrategy: entity => {
      entity.specialists.reverse();
      return entity;
    }
  }
);

export const team = new schema.Entity("teams", {
  channels: [channel]
});

export const teams = new schema.Entity("teams", {
  teams: [team]
});

export const epic = new schema.Entity("epics");

export const project = new schema.Entity("projects", {});

export const task = new schema.Entity("tasks", {});
