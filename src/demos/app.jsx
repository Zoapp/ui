/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import Zrmc, {
  Content, Fab, Snackbar,
  Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarIcon,
  Drawer, DrawerContent,
  ListItem,
  Dialog,
} from "zrmc";
import Main from "./main";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: "persistent", drawerOpen: false, aboveToolbar: false,
    };
  }

  componentWillMount() {
    Zrmc.init(this, { typography: true });
  }

  onMenuClick = (event) => {
    event.preventDefault();
    this.toggleDrawer();
  }

  handleDialog = () => {
    const dialog = (
      <Dialog header="Are you happy?" actions={[{ name: "Cancel" }, { name: "Continue" }]}>
        <div>Please check the left and right side of this element for fun.</div>
      </Dialog>);
    Zrmc.showDialog(dialog);
  }

  toggleDrawer = () => {
    const open = !this.state.drawerOpen;
    this.setState({ drawerOpen: open });
  }

  render() {
    let icon;
    if (this.state.drawer !== "permanent") {
      icon = <ToolbarIcon name="menu" onClick={this.onMenuClick} />;
    }
    return (
      <Content>
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection align="start" >
              {icon}
              <ToolbarTitle>ZUI Components</ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection align="end" shrinkToFit >
              <ToolbarIcon name="search" />
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <Drawer
          type={this.state.drawer}
          open={this.state.drawerOpen}
          above={this.state.aboveToolbar}
          onClose={this.toggleDrawer}
        >
          <DrawerContent list>
            <ListItem icon="inbox" activated>Demo</ListItem>
          </DrawerContent>
        </Drawer>
        <Content>
          <Main />
        </Content>
        <Fab icon="favorite" onClick={this.handleDialog} />
        <Snackbar message="Hello from snackbar" />
      </Content>
    );
  }
}
