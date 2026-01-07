import styled from "styled-components";

const Badge = styled.span`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  color: white;
  background: ${({ status, theme }) => theme.colors[status.toLowerCase()]};
`;

export default function StatusBadge({ status }) {
  return <Badge status={status}>{status}</Badge>;
}
