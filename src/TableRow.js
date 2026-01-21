import { useState } from "react";

function TableRow(props) {
  const grant = props.grant;
  const [expanded, setExpanded] = useState(false);

const participants = grant.Participant ? [].concat(grant.Participant) : [];

  return (
    <>
      <tr onClick={() => setExpanded(!expanded)} style={{ cursor: "pointer" }}>
        <td>{grant.ProjectTitle}</td>
        <td>{grant.Institution}</td>
        <td>{grant.InstCity}</td>
        <td>{grant.InstState}</td>
        <td>{grant.YearAwarded}</td>
        <td>{grant.Program}</td>
        <td>${Number(grant.OriginalAmount).toLocaleString()}</td>
      </tr>

      {expanded && participants.length > 0 && (
        <tr>
          <td colSpan="7" style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
            <strong>Participants:</strong>
            <ul>
              {participants.map((p, i) => (
                <li key={i}>
                  {p.Firstname} {p.Lastname} — {p.ValidFr} to {p.ValidTo || "Present"}
                </li>
              ))}
            </ul>
          </td>
        </tr>
      )}
    </>
  );
}

export default TableRow;