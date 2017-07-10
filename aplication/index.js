/**
 * Clusterização Mobile App
 * https://github.com/ecompjr
 * @Nilson Augusto
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: 0,
            projetos: 0,
            faturamento: 0,
            tempo: 0,
            membros: 0,
            cluster: 'Cluster 0'};
    }

    getProjetos(text){        
        this.setState({projetos: text})             
    }

    getFaturamento(text){        
        this.setState({faturamento: text})     
    }

    getTempo(text){
        this.setState({tempo: text})      
    }

    getMembros(text){
        this.setState({membros: text})        
    }

    getResult(){

        if (this.state.projetos == 0|| this.state.tempo == NaN|| this.state.membros == 0 ||this.state.faturamento == 0){
            alert("Por favor, preencha todos os campos");
        }else{
            let resultado = (this.state.projetos*this.state.tempo/this.state.membros)*this.state.faturamento;
            
            if (resultado < 125989.8){
                this.setState({cluster: 'Cluster 1', result: resultado})
            }else if (resultado >= 125989.8 && resultado < 579127.2){
                this.setState({cluster: 'Cluster 2', result: resultado})
            }else if(resultado >= 579127.2 && resultado < 1574270.3){
                this.setState({cluster: 'Cluster 3', result: resultado})
            }else if(resultado >= 1574270.3 && resultado < 5254664.9){
                this.setState({cluster: 'Cluster 4', result: resultado})
            }else if (resultado > 5254664.9){
                this.setState({cluster: 'Cluster 5', result: resultado})
            }
        }

            
        }
    

    componentWillMount(){
        <View style={Style.containerInitial}>
            <Text>AppCluster</Text>

            <Text >Desenvolvido por</Text>                       
        </View>
        
                
    }
    
    render () {
        return (
            <ScrollView style = {{flex:1}}>

               <View style={Style.container}>
                   <View style={{flex: 1}}>
                       <Text style={{fontSize: 20, color: '#FFF'}}>PONTUAÇÃO:</Text>
                   </View>
                   <View style={{flex: 2}}>
                       <Text style={{fontSize: 50, color: '#FFF'}} numberOfLines = {1}>{this.state.result}</Text>
                   </View>
                   <View style={{flex: 1}}>
                        <Text style={{fontSize: 30, color: '#FFF'}}>{this.state.cluster}</Text>
                   </View>       
                                     
               </View>             
               <View style={{flex: 2}}>
                 <View style={{flex: 5}}>
                   <View style={Style.row}>
                       <Text style={Style.text}>Projetos realizados:</Text>
                       <TextInput style={Style.value} keyboardType = 'numeric' placeholder="Quantidade de projetos." onChangeText = {(text)=>this.getProjetos(text)} underlineColorAndroid = 'transparent'/>
                   </View>

                   <View style={Style.row}>
                       <Text style={Style.text}>Faturamento com projetos:</Text>
                       <TextInput style={Style.value} keyboardType = 'numeric' placeholder="Em reais." onChangeText = {(text)=>this.getFaturamento(text)}  underlineColorAndroid = 'transparent'/>
                   </View>

                   <View style={Style.row}>
                       <Text style={Style.text}>Tempo médio de projetos:</Text>
                       <TextInput  style={Style.value} keyboardType = 'numeric' placeholder="Em dias." onChangeText = {(text)=>this.getTempo(text)} underlineColorAndroid = 'transparent'/>
                   </View>

                   <View style={Style.row}>
                       <Text style={Style.text}>Número de membros:</Text>
                       <TextInput style={Style.value} keyboardType = 'numeric' placeholder="Quantidade de membros." onChangeText = {(text)=>this.getMembros(text)} underlineColorAndroid = 'transparent'/>       
                   </View>
                 </View>
                 <View style={{flex: 1}}>
                    <TouchableOpacity style = {Style.buttom} onPress={()=>this.getResult()}>
                            <Text style={{fontSize: 30, color: '#FFF', fontFamily: 'ocr-a'}}>CALCULAR</Text>
                    </TouchableOpacity>
                 </View>
                </View>
            </ScrollView> 
        );
      }
  }   
    
    const Style = StyleSheet.create({
       containerInitial:{
           flex: 1,
           alignItems: 'center',
           justifyContent: 'center',
           backgroundColor: 'gray'
       },
       container:{
           flex: 1,
           alignItems: 'center',
           justifyContent: 'center',
           backgroundColor: 'blue',
           padding: 5
       },

       row:{
           flex: 1, 
           alignItems: 'center', 
           marginTop: 5            
       },

       text:{           
           fontSize:15,
           color: '#000'
       },

       value:{
          width: 300,
          height: 40,
          borderWidth:0.5,
          borderRadius:5,
         
       },

       imgbrjr:{
           width: 150,
           height: 100
       },

       imgecompjr:{
           width: 50,
           height: 50
       },

       buttom:{
         flex:1,
         margin: 30,         
         backgroundColor: 'blue',
         alignItems: 'center',
         justifyContent: 'center',
         borderRadius:5
       }
    });

