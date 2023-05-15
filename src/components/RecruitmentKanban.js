import React from "react";
import { Box, styled } from "@mui/system";

// import ToggleButtonNotEmpty from "./view/ToggleButton";
import KanbanBoard from "./KanbanBoard";


const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: {
    margin: "16px",
  },
  "& .breadcrumb": {
    marginBottom: "30px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "16px",
    },
  },
}));

const RecruitentKanbanBoard = () => {
  return (
    <ContentBox className="analytics">
      <Box maxHeight={"765px"} maxWidth={"100%"} overflow="auto">
      {/* <Box> */}
        {/* <ToggleButtonNotEmpty /> */}

        <KanbanBoard />
      </Box>
    </ContentBox>
  );
};

export default RecruitentKanbanBoard;