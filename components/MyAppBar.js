import React from 'react';
import { Appbar} from 'react-native-paper'
import { appBarStyles } from './styles'


export default class MyAppBar extends React.Component{
    render(){
      return (
            <Appbar style ={appBarStyles.bottom}>
                  <Appbar.Action icon="menu" onPress={()=>this.props.toggleDrawer()} />
                  <Appbar.Content title="Quiz App" subtitle={this.props.finished || !this.props.started ? "":this.props.seconds}/>
                  {(!this.props.finished || this.props.started) && 
                  [<Appbar.Action key={1} icon="autorenew" onPress={this.props.actions.reset} />,
                  <Appbar.Action key={2} icon="save" onPress={this.props.actions.save} />,
                  <Appbar.Action key={3} icon="restore" onPress={this.props.actions.restore} />,
                  <Appbar.Action key={4} icon="delete" onPress={this.props.actions.delete} />]}
            </Appbar>
      );
    }

}


