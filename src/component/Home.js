import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable, FlatList, TouchableOpacity, TextInput,ImageBackground } from "react-native";
import { categories, smartPhone,banners,account } from "../data";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('smart');
  const [filteredProducts, setFilteredProducts] = useState([]);
 const[selectedOptions,setSelectedOptions] = useState('')
 const [optionProduct, setOptionProduct] = useState([]);
 const [cunrrentBanner,setCurrentBanner] = useState(0);
 const [color, setColor] = useState('#00FFFF');
 const [background, setBackgroundColor] = useState('#CCFFFF');
 //thay đổi banner
useEffect(()=>{
    const bannerInterval=setInterval(()=>{
        setCurrentBanner((cunrrentBanner+1) % banners.lenght);
    },5000)
    return(
        clearInterval(bannerInterval)
    )
    },[cunrrentBanner]);

  // Khi danh mục được chọn thay đổi, lọc danh sách sản phẩm tương ứng
  useEffect(() => {
   let filter=smartPhone;
   if(selectedCategory){
       filter=filter.filter(item=>item.type===selectedCategory)
   }
   if(selectedOptions && selectedOptions.trim() !== ""){
       filter=filter.filter((item)=>item.option===selectedOptions)
       setBackgroundColor('#CCFFFF')
       setColor('#00FFFF')
   }
   if(setSelectedCategory===null)
   {
         filter=smartPhone;
   }
   setFilteredProducts(filter);
  }, [selectedCategory,selectedOptions]);

  return (
    <View style={{flex:1}}>
 <View style={{ backgroundColor: '#ffffff', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', width: 200, height: 50, borderRadius: 5, backgroundColor: '#DDDDDD', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <Image source={require('../image/search.png')} style={{ width: 20, height: 20 }} />
        <TextInput
          placeholder="Search"
          style={{ width: 150, height: 20, backgroundColor: '#DDDDDD', color: 'white' }}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'space-between', justifyContent: 'space-around' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Categories</Text>
        <View style={{ width: 250 }}></View>
        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>See all</Text>
      </View>
      <View>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          renderItem={({ item }) => {
            const isActive = item.type === selectedCategory;
            return (
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={[
                    styles.categoryItem,
                    { backgroundColor: item.background, shadowColor: isActive ? '#000' : 'transparent' },
                  ]}
                  onPress={() => setSelectedCategory(isActive ? null : item.type)}
                >
                  <Image source={item.image} style={styles.categoryImage} />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <Pressable style={{
    width: 70,
    height: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor:background}}
     onPress={()=>setSelectedOptions('bestsale')}>
          <Text style={{color:color}}>BestSale</Text>
        </Pressable>
        <Pressable style={{width:100,height:20,justifyContent:'center',backgroundColor:background}} onPress={()=>setSelectedOptions('bestmatched')}>
          <Text style={{color:color,fontWeight:700}}>BestMatched</Text>
        </Pressable>
        <Pressable style={{backgroundColor:background}}onPress={()=>setSelectedOptions('popular')}>
          <Text style={{color:color}}>Popular</Text>
        </Pressable>
      </View>
      <View style={{flex:1}}>
      <View style={{flex:7}}>
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.productItem}>
                <Image source={item.image} style={styles.productImage} />
                <View>
                  <Text>{item.name}</Text>
                  <Image source={item.danhgia} style={styles.productRating} />
                </View>
                <View>
                  <Text>{item.price}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={{flex:3}}>
        <Pressable onPress={()=>setSelectedCategory(null)} style={{backgroundColor:'#AAAAAA',width:100,height:20,justifyContent:'center'}}>
            <Text>SeeAll</Text>
        </Pressable>
      </View>
      </View>
      <ImageBackground source={banners[cunrrentBanner]} style={{width:250,height:70,borderRadius:5}}/>
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: 70,
    height: 70,
  },
  filterButton: {
   // backgroundColor: {background},
    width: 70,
    height: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  filterButtonText: {
    //color: {color},
    fontWeight: 'bold',
  },
  productItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  productImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  productRating: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },
});

export default Home;
