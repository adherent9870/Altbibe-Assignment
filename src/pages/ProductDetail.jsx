import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/product";
import StatusBadge from "../components/product/StatusBadge";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 900px;
  margin: 32px auto;
  padding: 0 16px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const Meta = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

const Section = styled.section`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Row = styled.p`
  font-size: 14px;
`;

const Disclaimer = styled.div`
  margin-top: 32px;
  padding: 12px;
  background: #f3f4f6;
  font-size: 13px;
`;
function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) return <Wrapper>Product not found.</Wrapper>;

  return (
    <Wrapper>
      <BackButton onClick={() => navigate(-1)}>← Back to products</BackButton>

      <h1>{product.name}</h1>
      <Meta>
        {product.category} · {product.producer} · Last updated{" "}
        {product.updatedAt}
      </Meta>

      <StatusBadge status={product.status} />

      <Section>
        <SectionTitle>Disclosure Summary</SectionTitle>
        <Row>
          <strong>Declared by:</strong> {product.declaredBy}
        </Row>
        <Row>
          <strong>Date:</strong> {product.updatedAt}
        </Row>
        <Row>
          <strong>Evidence:</strong> {product.evidenceCount} attached
        </Row>
      </Section>

      <Section>
        <SectionTitle>Version History</SectionTitle>
        {product.versions.map((v) => (
          <Row key={v.id}>
            {v.date} — {v.status}
          </Row>
        ))}
      </Section>

      <Disclaimer>
        This page presents producer-declared information; it is not
        certification or verification.
      </Disclaimer>
    </Wrapper>
  );
}
export default ProductDetail;
