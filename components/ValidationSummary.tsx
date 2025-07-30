export function ValidationSummary({ errors }: { errors: string[] }) {
  return (
    <div className="bg-red-100 border border-red-400 p-4 rounded">
      <h2 className="font-bold">Validation Errors:</h2>
      <ul className="list-disc ml-4">
        {errors.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}