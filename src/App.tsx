import { Deck, Heading, Slide } from "spectacle"
import Slide1 from "./slides/slide1-welcome"

const App = () => {
  return (
    <Deck >
      <Slide1 />
      <Slide>
        <Heading>Hello</Heading>
      </Slide>
    </Deck>
  )
}

export default App  