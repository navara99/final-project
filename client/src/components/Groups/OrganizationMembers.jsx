import React from "react";
import useExpand from "../../hooks/useExpand";
import { ListItemText, Card, IconButton, Collapse, CardActions } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MembersList from "./MembersList";
import { useParams } from "react-router";
import GroupsBtn from "./GroupsBtn";
import { useState } from "react";
import AddMemberForm from "./AddMemberForm";
import { Person } from "@mui/icons-material";

function OrganizationMembers({ organization, cardStyles, setSnackBarDetails }) {
  const { ExpandMore, handleExpandClick, expanded } = useExpand();
  const [openAddMembersModal, setOpenAddMembersModal] = useState(false);
  const { id } = useParams();

  const handleAddMemberBtn = () => {
    setOpenAddMembersModal(!openAddMembersModal)
  };

  return (
    <div>
      <AddMemberForm
        {...{ openAddMembersModal }}
        {...{ setOpenAddMembersModal }}
        {...{ id }}
        {...{ setSnackBarDetails }} />
      <Card alignItems="flex-start" style={cardStyles}>
        <div className="organization-card">
          <ListItemText
            primary={<h2 className="organization-card-name">Members</h2>}
            secondary={`${organization.details.name} has ${organization.members.length} member(s).`}
          />
          <GroupsBtn
            text="Add member"
            variant="contained"
            icon={<Person />}
            onClick={handleAddMemberBtn}
          />
        </div>
        <CardActions>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <MembersList members={organization.members} />
        </Collapse>
      </Card >
    </div >
  )
};

export default OrganizationMembers;