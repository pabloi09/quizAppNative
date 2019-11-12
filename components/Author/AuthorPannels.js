import React from "react";
import {titles,content} from "./ContentAuthor"
import { View } from "react-native"
import { List, Title, Subheading} from "react-native-paper"
import {authorStyles} from "../styles"

export default class AuthorPannels extends React.Component {

    render(){
        return (
            <View style={authorStyles.expPanel}>
                {titles.map((title,index)=>{
                    return (<List.Accordion title={title} 
                                            key = {index}>
                                {content[index].map((item,index)=>{
                                    return (
                                            item.subtitle ?
                                            <View style={{flexDirection:"column",alignItems:"center", width:"85%", padding:24}}
                                                  key={index}>
                                                <Title>
                                                    {item.title}
                                                </Title>
                                                <Subheading>
                                                    {item.subtitle}
                                                </Subheading>
                                            </View>:
                                            <Subheading style={{flexDirection:"column",alignItems:"center", width:"85%", padding:24}}
                                                        key={index}>
                                                {item.title}
                                            </Subheading>)
                                })}
                            </List.Accordion>);
                })}
            </View>
        )
    }
}