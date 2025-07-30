import { z } from 'zod';

export const ClientSchema = z.object({
  ClientID: z.string(),
  ClientName: z.string(),
  PriorityLevel: z.number().min(1).max(5),
  RequestedTaskIDs: z.string(),
  GroupTag: z.string(),
  AttributesJSON: z.string(),
});

export const WorkerSchema = z.object({
  WorkerID: z.string(),
  WorkerName: z.string(),
  Skills: z.string(),
  AvailableSlots: z.string(),
  MaxLoadPerPhase: z.number(),
  WorkerGroup: z.string(),
  QualificationLevel: z.string(),
});

export const TaskSchema = z.object({
  TaskID: z.string(),
  TaskName: z.string(),
  Category: z.string(),
  Duration: z.number().min(1),
  RequiredSkills: z.string(),
  PreferredPhases: z.string(),
  MaxConcurrent: z.number(),
});