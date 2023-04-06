import React from "react";
import { useQuery } from "@apollo/react-hooks";
import  classes from './skills.module.scss'
import { getSkills } from "../../Graphql/Query";
import Link from "next/link";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import SectionSubtitle from "@/components/UI/subtitle/SectionSubtitle";
function Skills(props) {
  const { loading, error, data } = useQuery(getSkills);

  console.log(data);
  if (loading) return "Loading";

  return (
    <div>
      <Grid item container xs={12} justifyContent="center">
      <SectionSubtitle subtitle="Skills" />
      </Grid>

      <Grid container>
        <Grid item container xs={6} justifyContent="end">
          <List>
            <ListItem>
              <ListItemText>
                <Typography style={{ fontSize: "150%", fontWeight: 500 }}>
                  tools
                </Typography>
                <ListItem>
                  {data.getSkills.map((skill) => {
                    if (skill.typesk === "tools") {
                      return (
                        <div key={skill.id}>
                          <ListItemAvatar>
                            <img
                              src={skill.img}
                              alt={skill.label}
                              width="50"
                              height="50"
                            />{" "}
                          </ListItemAvatar>

                          <p>{skill.label}</p>
                        </div>
                      );
                    }
                    return null;
                  })}
                </ListItem>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      <Divider className={classes.divider} orientation="vertical" flexItem />
     
      <Grid item xs={5}>
        <List>
          <ListItem>
            <ListItemText>
              <Typography style={{ fontSize: "150%", fontWeight: 500 }}>
                {" "}
                environment{" "}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
              {data.getSkills.map((skill) => {
                if (skill.typesk === "environment") {
                  return (
                    <div key={skill.id}>
                      <ListItemAvatar>
                        <img
                          src={skill.img}
                          alt={skill.label}
                          width="50"
                          height="50"
                        />
                      </ListItemAvatar>

                      <p>{skill.label}</p>
                    </div>
                  );
                }
                return null;
              })}
          </ListItem>
        </List>
      </Grid>
      </Grid>

    </div>
  );
}

export default Skills;
