import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import bg from '../assets/TAEWAKALNA_BG.png'
import avatar from '../assets/user.png'
import qr from '../assets/qr-code.png'
import alarm from '../assets/icons/active/alarm.png'
import refresh from '../assets/icons/active/refresh.png'
import arrow from '../assets/icons/active/next.png'
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <View style={styles.container}>    
      <Image source={alarm } style={styles.alarm}/>
      <View style={styles.wrapper}>
     <View style={styles.profileContainer}>
     <ImageBackground source={bg} style={styles.profile} imageStyle={{borderRadius:10}} resizeMode="cover">
     <Image source={avatar} style={styles.avatarImage} />
     <Text style={styles.userName}>في العتيبي</Text>
     </ImageBackground>
     </View>
     <LinearGradient
        // Background Linear Gradient
        colors={['rgb(6,74,34)', 'rgb(12,107,51)']}
         style={styles.card}
      > 
     {/* <View style={styles.refreshIcon}></View> */}
     <Image source={refresh} style={styles.refreshIcon}/>
       <View style={styles.cardText}>
         <Text style={styles.textHead}>محصًن</Text>
         <Text style={styles.textDetails}>أكمل جرعات لقاح كورونا (كوفيد-19)</Text>
         <Text style={styles.UpdateDetails}>آخر تحديث الاربعاء 28 يوليو، 10:35 ص</Text>
       </View>
       <Image source={qr} style={styles.qrImage} />
       </LinearGradient>
     <View style={styles.services}>
     <View style={styles.showAll}>
         <Image source={arrow} style={styles.servicesIcon}/>
         <Text style={styles.textShowAll}>عرض الكل</Text>
       </View>
       <Text style={styles.textHeadColor}>الخدمات الحديثة</Text>
     </View>
     <View  style={styles.icons}>
 <Image />
 <Image />
 <Image />
 <Image />
</View>
<View style={styles.servicesDetails}>
  <ScrollView horizontal={true} style={{width: "90%"}}>

  <View style={styles.boxContainer}>
              <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/QrCode.png')}></Image>
               <Text style={styles.serviceName}> باركود زيارد تجمع</Text>  
               </View>
               </TouchableOpacity>
           </View>
<View style={styles.boxContainer}>
              <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/Test.png')}></Image>
               <Text style={styles.serviceName}> فحص كورونا</Text>  
               </View>
               </TouchableOpacity>
           </View>

<View style={styles.boxContainer}>
              <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/id.png')}></Image>
               <Text style={styles.serviceName}> بطاقة الوضع الصحي</Text>  
               </View>
               </TouchableOpacity>
           </View>
           <View style={styles.boxContainer}>
              <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/familySponsored.png')}></Image>
               <Text style={styles.serviceName}> بطاقة الوضع الصحي</Text>  
               </View>
               </TouchableOpacity>
           </View>

           {/* <View style={styles.boxContainer}>
              <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/mobileNumber.png')}></Image>
               <Text style={styles.serviceName}> تعريف رقم الجوال</Text>  
               </View>
               </TouchableOpacity>
           </View> */}
           
           <View style={styles.boxContainer}>
              <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/Vaccine.png')}></Image>
               <Text style={styles.serviceName}> لقاح كورونا</Text>  
               </View>
               </TouchableOpacity>
           </View>
           <View style={styles.boxContainer}>
              <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/healthPassport.png')}></Image>
               <Text style={styles.serviceName}>  الجواز الصحي</Text>  
               </View>
               </TouchableOpacity>
           </View>
           <View style={styles.boxContainer}>
              <TouchableOpacity>
               <View style={styles.box}>
               <Image style={styles.logo} source={require('../assets/icons/active/organDonation.png')}></Image>
               <Text style={styles.serviceName}> التبرع بالاعضاء</Text>  
               </View>
               </TouchableOpacity>
           </View>
  </ScrollView>
</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1217',    
    alignItems: 'center',
    justifyContent: 'center',
    color : 'white',
  },
  textDetails: {
     color: 'white', 
     fontSize: 13,
     marginRight:26,
     marginLeft:10,
    //  marginLeft:10,
     textAlign:"right",
     lineHeight:35,
     
  }, 

  UpdateDetails:
  {
    color: 'white', 
     fontSize: 11.5,
     marginRight:26,
     marginLeft:10,
    //  marginLeft:10,
     textAlign:"right",
     lineHeight:35
  },
  textHead:{
    color: 'white',
    textAlign:"right",
    fontSize: 18,
    marginRight:20,
    fontWeight:'bold',
  },
  userName: {
    color: '#23AA9C',
    textAlign:"center",
    paddingTop:10,
    fontSize:23
  },

  profile:{
    width: 300,
    height: 200,
    marginRight:15,
    marginLeft:15,
  },
  avatarImage:{
    width: 80,
    height: 80,
    alignSelf:"center",
    marginTop:5
  },
  card:{
    backgroundColor:"green",
    flexDirection:'row',
    borderRadius: 10,
    // padding: 20,
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:20,
    paddingVertical:20,
    paddingHorizontal:20,
    width: 350,
    height: 150
  },
  qrImage:{
    width: 80,
    height: 80,
    marginLeft:-60 ,
    marginRight:-6 ,
  },

  alarm:{
    width: 40,
    height: 40,
    alignSelf: 'flex-start',
  },
  wrapper:{
    marginRight:10,
    marginLeft:10,
  },
  refreshIcon:{
    width: 15,
    height: 15,
    marginBottom:8
  },
  profileContainer:{
    justifyContent: "center",
    alignItems: 'center'
  },
  cardText:{
    width: 240,
    marginLeft:-60,
  },
  services:
  {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 20,
    marginHorizontal: 8
  },

  textHeadColor:{
    color:'#23AA9C',
    fontSize:23
  },
  text:
  {
    color: '#fff',
  },
  servicesIcon:
  {
    height: 20,
    width: 15,
  },
  showAll:
  {
    flexDirection:'row',
    justifyContent:'space-between',
  },
  textShowAll:{
    color: 'gray',
    marginLeft:10
  },
  box:{
    backgroundColor: "#1C1B1B",
    width:83,
    height:140,
    margin:8,
    borderRadius:15,      
  },
  logo:{
    height:45,
    width:45,
    alignSelf:"center",
    marginTop:25,
},
  serviceName:{
      flex:1,
      color:"white",
      marginTop:20,
      fontSize:13,
      alignSelf:"center",
      alignItems:"center",
      textAlign:'center'
  },
  service:{
      color:"#6b6a6b",
      alignSelf:"flex-end",
      fontSize:25,
  },
  boxContainer:{
  flexDirection:"row-reverse",
  justifyContent:"flex-start",
  marginBottom:18,
  flexWrap:"wrap",
  },
  servicesDetails:
  {
    flexDirection:'row',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  }

});

