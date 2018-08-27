import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class GeneralInformation extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '總務須知',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainerNoBorder, MainContent, ItemTitleH2, ItemTitleH3 } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <View style={ ViewSubContainerNoBorder }>
                    <Text style={ ItemTitleH2 }>一、	信件收發</Text>
                    <Text style={ ItemTitleH3 }>1.平信類：信件由總務處處理，依收件單位分送至各單位或宿舍信箱，未註明收件單位之信件則存放於總務處旁未指定信箱供人領取，逾三周仍未領取之信件以退件處理。</Text>
                    <Text style={ ItemTitleH3 }>2.掛號類：信件由總務處保管組處理，每日下午三點後於總務處網站公告當日信件；基於個資保護原則，包裹、掛號上留有電話號碼之收件者，當日以簡訊或e-mail通知，其餘信件於一周催領已收件7天以上之信件收件人領取；逾三周仍未領取之信件以退件處理。領取掛號信件請攜帶學生證至總務處簽收領取；代領請攜帶收件人學生證及代領人學生證簽收領取。</Text>
                    <Text style={ ItemTitleH3 }>3.重要信件請以掛號、包裹、宅急便等方式寄出，信件上請註明聯絡電話、系所及學號，避免因同名同姓而錯領，亦方便日後通知領信。</Text>
                    <Text style={ ItemTitleH2 }>二、	器材借用</Text>
                    <Text style={ ItemTitleH3 }>1.一般教室皆裝設單槍投影機、資訊講桌，總務處、進修推廣部提供筆記型電腦、傳輸線、音源線、網路線、延長線、麥克風、冷氣遙控器等，請攜帶有效證件借用。</Text>
                    <Text style={ ItemTitleH3 }>2.一般借用須於當天晚上十點前歸還，如需跨夜借用，須填具器材借用單（總務處網站可下載），經主管單位簽章後，送至總務處保管組辦理並攜帶有效證件借用即可。</Text>
                    <Text style={ ItemTitleH2 }>三、	場地借用</Text>
                    <Text style={ ItemTitleH3 }>一般教室已實施節能系統供電，若有借用須請系上助理或老師至教務資訊系統借用，專業教室請洽所屬學系借用；國際會議中心（A101）、亞洲會議中心（M001）及其他公共空間，請先行致電總務處保管組（分機3323）確認是否可借用後填寫場地借用單（總務處網站可下載），主管單位簽章後，送至總務處保管組辦理即可。</Text>
                    <Text style={ ItemTitleH2 }>四、	設備報修</Text>
                    <Text style={ ItemTitleH3 }>學校首頁→校園入口→其他資訊服務→維修通報系統。</Text>
                </View>
            </ScrollView>
        );
    }
}

export default GeneralInformation;
