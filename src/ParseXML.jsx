import React from 'react';
import axios from 'axios';

class ParseXML extends React.Component {

    componentDidMount() {
        var self = this;
        axios
        .get("https://nanowrimo.org/wordcount_api/wc/aldarine", {
            "Content-Type": "application/xml; charset=utf-8"
        })
        .then(function(response) {
            self.setState({aldarine: response.data});
        })
        .catch(function(error){
            console.log(error);
        });
        }
    

}
