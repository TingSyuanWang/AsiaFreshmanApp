import React, { Component } from 'react';
import {Text, ScrollView, View, Image, Linking} from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';


class TrafficSafety extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '交通安全',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainerNoBorder, ItemTitleH2, ItemTitleH2RedLeft, ImageStyle3, ItemTitleH1, ItemTitleH3 } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <View style={ ViewSubContainerNoBorder }>
                    <Text style={ ItemTitleH1 }>1.本校周邊及霧峰分局所轄易肇事路段、肇因，請各位同學行經該路段時，注意相關交通安全，亦正確配戴合格安全帽，並勿無駕駛執照騎乘機車。</Text>
                    <Text style={ ItemTitleH2 }>易肇事路段如下：</Text>
                    <Text style={ ItemTitleH3 }>(一)大里區德芳南路環中東路。</Text>
                    <Text style={ ItemTitleH3 }>(二)大里區新仁路環中東路。</Text>
                    <Text style={ ItemTitleH3 }>(三)大里區中興路德芳南路。</Text>
                    <Text style={ ItemTitleH3 }>(四)大里區國光路德芳南路。</Text>
                    <Text style={ ItemTitleH3 }>(五)大里區中興路仁化路。</Text>
                    <Text style={ ItemTitleH3 }>(六)大里區國光路德芳路。</Text>
                    <Text style={ ItemTitleH3 }>(七)大里區中投東路德芳路。</Text>
                    <Text style={ ItemTitleH3 }>(八)大里區國光路大明路。</Text>
                    <Text style={ ItemTitleH3 }>(九)霧峰區中正路林森路(立院中辦)。</Text>
                    <Text style={ ItemTitleH3 }>(十)霧峰區民生路吉峰東路。</Text>
                    <Text style={ ItemTitleH3 }>(十一)霧峰區柳豐路。</Text>
                    <Text style={ ItemTitleH1 }>2.肇事原因如下：</Text>
                    <Text style={ ItemTitleH3 }>(一)未依規定讓車。</Text>
                    <Text style={ ItemTitleH3 }>(二)未注意車前狀態。</Text>
                    <Text style={ ItemTitleH3 }>(三)違反號誌管制或指揮。</Text>
                    <Text style={ ItemTitleH3 }>(四)違反特定標誌（線）禁制。</Text>
                    <Text style={ ItemTitleH3 }>(五)起步未注意其他車(人)安全。</Text>
                </View>
            </ScrollView>
        );
    }
}

export default TrafficSafety;
