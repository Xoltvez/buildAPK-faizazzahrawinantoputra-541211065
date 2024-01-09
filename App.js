import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, Image, Button, Linking,ScrollView} from 'react-native';

const portofolio = () =>{
  const url ='https://dribbble.com/faizazzahra88';
  Linking.openURL(url);
}

const cv = () =>{
  const url ='https://drive.google.com/file/d/1trVzAoeNknhQ5nqmZc2iB9puc_uz4g7g/view?usp=share_link';
  Linking.openURL(url);
}

const travel = () =>{
  const url ='https://dribbble.com/shots/20404324-Reesen-E-tourism-App?utm_source=Clipboard_Shot&utm_campaign=faizazzahra88&utm_content=Reesen%20-%20E-tourism%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=faizazzahra88&utm_content=Reesen%20-%20E-tourism%20App&utm_medium=Social_Share';
  Linking.openURL(url);
}

const webshoes = () =>{
  const url ='https://dribbble.com/shots/20547575-MrBuy-E-commerce?utm_source=Clipboard_Shot&utm_campaign=faizazzahra88&utm_content=MrBuy%20-%20E-commerce&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=faizazzahra88&utm_content=MrBuy%20-%20E-commerce&utm_medium=Social_Share';
  Linking.openURL(url);
}

const applaundry = () =>{
  const url ='https://dribbble.com/shots/20547575-MrBuy-E-commerce?utm_source=Clipboard_Shot&utm_campaign=faizazzahra88&utm_content=MrBuy%20-%20E-commerce&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=faizazzahra88&utm_content=MrBuy%20-%20E-commerce&utm_medium=Social_Share';
  Linking.openURL(url);
}

const wordpress = () =>{
  const url ='https://faiz.puskomedia.id/';
  Linking.openURL(url);
}

const linktree = () =>{
  const url ='https://linktr.ee/7faiz';
  Linking.openURL(url);
}




const App = () => {
  return (
    <ScrollView>
    <View style={{backgroundColor:' ', flex:1}}>
    <View style={{alignItems:'center'}}>
        <Image style={{width:200, height:200, marginTop:20, borderColor:'#C5A80D', borderWidth:10, marginBottom:32, borderRadius:100}} 
        source={require('./assets/foto1.jpeg')} />
  
    <View>
    <Text style={{marginBottom:12, textAlign:'center', color:'#2f4f4f', fontSize:30, fontFamily:'',
         fontWeight:'bold', marginHorizontal:40}}>Faiz Azzahra Winanto Putra</Text>
    <Text style={{marginBottom:20, textAlign: 'center', color: 'rgba(30, 30, 30, 0.40)', fontSize: 16,
         fontFamily: 'Manrope', fontWeight: '400', marginHorizontal:40}}>Saya adalah siswa di SMK Telkom Purwokerto mengambil jurusan RPL, saya berminat sebagai UI Designer, FrontEnd Developer.</Text>

         <View style={{marginBottom: 20, paddingHorizontal: 50, borderRadius: 32}}>
         <Button title='Contact me' color='#C5A80D' onPress={linktree}/></View>
    

         <View style={{marginBottom: 20, paddingHorizontal: 50, borderRadius: 32}}>
         <Button title='Portofolio' color='#C5A80D'padding='20px' onPress={portofolio}/></View>
          <View style={{marginBottom: 20, paddingHorizontal: 100, borderRadius: 32}}>
         <Button title='CV' color='#C5A80D' onPress={cv}/></View>
    </View>
    </View>
    <View style={{alignItems:'center'}}>
      <Text style={{color:'#2f4f4f',textAlign: 'center', marginTop:10, fontSize:'25px', fontWeight:'bold', marginHorizontal:40}}>Recent Project</Text>

           <Image style={{width:300, height:200, marginTop:32, marginBottom:20, borderRadius:5}}source={require('./assets/websitedesa.png')}/>
      <Text style={{marginBottom: 2, textAlign:'center', color:'#2f4f4f', fontWeight:'bold', marginHorizontal:40, fontSize:'18px'}}>Website Desa</Text>
      <Text style={{marginBottom: 20, textAlign:'center', color:'#2f4f4f', fontWeight:'bold', marginHorizontal:40, fontSize:'12px'}}>Wordpress</Text>
    </View>
    <View style={{marginBottom:32, paddingHorizontal:50, borderRadius:32}}>
    <Button title='See Website' color='#C5A80D' onPress={wordpress}/>
    </View>

      <Image style={{width:300, height:200, marginTop:32, marginBottom:20, borderRadius:5}}source={require('./assets/travelapp1.jpg')}/>
      <Text style={{marginBottom: 2, textAlign:'center', color:'#2f4f4f', fontWeight:'bold', marginHorizontal:40, fontSize:'18px'}}>Reesen - E-tourism App</Text>
      <Text style={{marginBottom: 20, textAlign:'center', color:'#2f4f4f', fontWeight:'bold', marginHorizontal:40, fontSize:'12px'}}>App Design</Text>
    </View>
    <View style={{marginBottom:32, paddingHorizontal:50, borderRadius:32}}>
    <Button title='See Dribbble' color='#C5A80D' onPress={travel}/>
     </View>

<View style={{alignItems:'center'}}>
           <Image style={{width:300, height:200, marginTop:32, marginBottom:20, borderRadius:5}}source={require('./assets/shoesweb1.jpg')}/>
      <Text style={{marginBottom: 2, textAlign:'center', color:'#2f4f4f', fontWeight:'bold', marginHorizontal:40, fontSize:'18px'}}>Shoes Web - MrBuy</Text>
      <Text style={{marginBottom: 20, textAlign:'center', color:'#2f4f4f', fontWeight:'bold', marginHorizontal:40, fontSize:'12px'}}>Web Design</Text>
    </View>
    <View style={{marginBottom:32, paddingHorizontal:50, borderRadius:32}}>
    <Button title='See Dribbble' color='#C5A80D' onPress={webshoes}/>
     </View>
     
     <View style={{alignItems:'center'}}>
           <Image style={{width:300, height:200, marginTop:32, marginBottom:20, borderRadius:5}}source={require('./assets/expresslaundry1.jpg')}/>
      <Text style={{marginBottom: 2, textAlign:'center', color:'#2f4f4f', fontWeight:'bold', marginHorizontal:40, fontSize:'18px'}}>Express Laundry</Text>
      <Text style={{marginBottom: 20, textAlign:'center', color:'#2f4f4f', fontWeight:'bold', marginHorizontal:40, fontSize:'12px'}}>App Design</Text>
    </View>
    <View style={{marginBottom:32, paddingHorizontal:50, borderRadius:32}}>
    <Button title='See Dribbble' color='#C5A80D' onPress={applaundry}/>
     </View>


    </ScrollView>
  )
};

export default App;