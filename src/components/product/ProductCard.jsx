import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";
import styled from "styled-components";
const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 16px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;
export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <Card
      tabIndex={0}
      onClick={() => navigate(`/products/${product.id}`)}
      onKeyDown={(e) =>
        e.key === "Enter" &&
        navigate(`/products/${product.id}
`)
      }
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3>{product.name}</h3>
          <p>
            {product.category} · {product.producer}
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <StatusBadge status={product.status} />
          <p>{product.updatedAt}</p>
        </div>
      </div>
    </Card>
  );
}
