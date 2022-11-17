import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  margin: 20px auto;
  width: 400px;
  height: 400px;
  display: grid;
  grid-template-columns: 200px 200px;
  justify-content: center;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  opacity: 0.9;
`;

const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;

  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const Circle = styled(motion.div)`
  background-color: #5e5f63;
  height: 40px;
  width: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const ButtonSave = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: green;
  width: 100px;
  height: 30px;
`;

const boxVariants = {
  hover: { scale: 1.3 },
  click: { borderRadius: "100px" },
};

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  const [id, setId] = useState<null | string>(null);
  return (
    <Wrapper>
      <Grid>
        <Box
          variants={boxVariants}
          whileHover="hover"
          onClick={() => setId("1")}
          key={"1"}
          layoutId={"1"}
        />
        <Box
          variants={boxVariants}
          whileHover="hover"
          onClick={() => setId("2")}
          key={"2"}
          layoutId={"2"}
        >
          {!clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 50 }} />
          ) : null}
        </Box>
        <Box
          variants={boxVariants}
          whileHover="hover"
          onClick={() => setId("3")}
          key={"3"}
          layoutId={"3"}
        >
          {clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 50 }} />
          ) : null}
        </Box>
        <Box
          variants={boxVariants}
          whileHover="hover"
          onClick={() => setId("4")}
          key={"4"}
          layoutId={"4"}
        />
        <ButtonSave>
          <Button onClick={toggleClicked}>Switch</Button>
        </ButtonSave>
      </Grid>

      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box layoutId={id} style={{ width: 300, height: 300 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
