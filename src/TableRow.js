function TableRow({ grant }) {
  return (
    <tr>
      <td>{grant.ProjectTitle}</td>
      <td>{grant.Institution}</td>
      <td>{grant.InstCity}</td>
      <td>{grant.InstState}</td>
      <td>{grant.YearAwarded}</td>
      <td>{grant.Program}</td>
      <td>${Number(grant.OriginalAmount).toLocaleString()}</td>
    </tr>
  );
}

export default TableRow;