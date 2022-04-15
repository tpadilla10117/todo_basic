import React, { useEffect } from "react";
/* import TodoList from "./TodoList";
import TodoForm from "./TodoForm"; */
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

function TodoApp() {
    return (
    /*<Paper /> from material UI provides a background:  */
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color='primary' position="static" style={{ height: "64px"}}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>

            </AppBar>

        </Paper>
    )
}

export default TodoApp;