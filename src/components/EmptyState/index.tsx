import { StyledView } from './styled';

export default function EmptyState() {

  return (
    <StyledView>
      <h3>Ops! Something went wrong</h3>
      <section>
        <p>There is no events created yet. How about create some?</p>
      </section>
    </StyledView>
  )
}
