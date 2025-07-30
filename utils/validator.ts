export function validateAll(data: any) {
  const errors: string[] = [];

  const taskIds = data.tasks.map((t: any) => t.TaskID);
  data.clients.forEach((client: any) => {
    const ids = client.RequestedTaskIDs.split(',');
    ids.forEach((id: string) => {
      if (!taskIds.includes(id.trim())) {
        errors.push(`Client ${client.ClientID} requests unknown TaskID ${id}`);
      }
    });
  });

  return errors;
}