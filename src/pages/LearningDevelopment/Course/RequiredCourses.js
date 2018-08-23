import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../../assets/customStyle';


class RequiredCourses extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '校定必修課程注意事項',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.reset({index: 0, actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainerNoBorder, MainContent, ItemTitleH1, ItemTitleH2, DividerShort } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <View style={ ViewSubContainerNoBorder }>
                    <Text style={ ItemTitleH1 }>1. 107學年度校定必修各類科目，請務必注意系上所給的課程規劃，並依規定選修。</Text>
                    <Text style={ ItemTitleH1 }>2. 通識博雅課程之修課規定如下：</Text>
                    <Text style={ ItemTitleH2 }>大學日間部識博雅課程之修課規定</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ MainContent }>1. 通識博雅課程分為4類：</Text>
                    <Text style={ MainContent }>{'\t'}(1) 人文類課程名稱會加上「-1」</Text>
                    <Text style={ MainContent }>{'\t'}(2) 社會類課程名稱會加上「-2」</Text>
                    <Text style={ MainContent }>{'\t'}(3) 自然類課程名稱會加上「-3」</Text>
                    <Text style={ MainContent }>{'\t'}(4) 生活應用類課程名稱會加上「-4」</Text>
                    <Text style={ MainContent }>2. 修課規定（6學分）：</Text>
                    <Text style={ MainContent }>{'\t'}(1) 人社學院修：2、3、4類</Text>
                    <Text style={ MainContent }>{'\t'}(2) 管理學院修：1、3、4類</Text>
                    <Text style={ MainContent }>{'\t'}(3) 醫健學院修：1、2、4類</Text>
                    <Text style={ MainContent }>{'\t'}(4) 資訊學院修：1、2、4類</Text>
                    <Text style={ MainContent }>{'\t'}(5) 創意學院修：1、2、3類</Text>
                    <Text style={ MainContent }>{'\t'}修滿6學分，始得畢業。</Text>
                    <Text style={ ItemTitleH2 }>進修學士班</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ MainContent }>1. 通識博雅課程分為4類：</Text>
                    <Text style={ MainContent }>{'\t'}(1) 人文類課程名稱會加上「-1」</Text>
                    <Text style={ MainContent }>{'\t'}(2) 社會類課程名稱會加上「-2」</Text>
                    <Text style={ MainContent }>{'\t'}(3) 自然類課程名稱會加上「-3」</Text>
                    <Text style={ MainContent }>{'\t'}(4) 生活應用類課程名稱會加上「-4」</Text>
                    <Text style={ MainContent }>2. 修課規定（10學分）：</Text>
                    <Text style={ MainContent }>{'\t'}不限類別，修滿10學分，始得畢業。</Text>
                </View>
            </ScrollView>
        );
    }
}

export default RequiredCourses;
