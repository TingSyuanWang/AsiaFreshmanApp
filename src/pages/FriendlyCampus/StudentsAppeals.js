import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class StudentsAppeals extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '學生申訴',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.reset({index: 0, actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainerNoBorder, ItemTitleH2 } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <View style={ ViewSubContainerNoBorder }>
                    <Text style={ ItemTitleH2 }>本校為保障學生學習、生活與受教權益，增進校園和諧，特依大學法第三十三條第四項、教育部「大學及專科學校學生申訴案處理原則」、特殊教育法第二十一條第三項、「特殊教育學生申訴服務辦法」、本校組織規程第十三條第三項規定、「公民與政治權利國際公約」及「經濟社會文化權利國際公約施行法」等精神訂定本校學生申訴處理辦法。</Text>
                    <Text style={ ItemTitleH2 }>*「公民與政治權利國際公約」（International Covenant on Civil and Political Rights）：在闡明正義及和平係人類之基本權利，不分種族、膚色、性別、語言、宗教、政治理念、社會階層、財富、出生背景等，所有人民在公民、政治權利方面人人平等；禁止販奴、種族集體屠殺、嚴刑拷打或任何非人道之刑罰，死刑不應行之於孕婦或18歲以下之少年等。</Text>
                    <Text style={ ItemTitleH2 }>*「經濟社會文化權利國際公約」（International Covenant on Economic, Social and Cultural Rights）：在促進各國對人權及自由之重視，提升人類在政治地位及經濟、社會、文化各方面之發展；規定締約國應尊重人民之自決權、工作權以及男女平等、組織公會、罷工、免除飢餓、恐懼、教育、工作等權利，提供人民適當之勞工保護、社會安全保險、家庭福利、參與文化、科學生活等平等機會。</Text>
                    <Text style={ ItemTitleH2 }>本校學生、學生會及其他相關學生自治組織，對於本校之懲處、其他措施或決議，認為違法或不當，致損害其權利或利益者，得依規定，向學生申訴評議委員會提出申訴。</Text>
                    <Text style={ ItemTitleH2 }>亞洲大學申訴受理窗口：</Text>
                    <Text style={ ItemTitleH2 }>學生事務處（行政大樓一樓，分機3202）或申訴信箱（student@asia.edu.tw）</Text>
                </View>
            </ScrollView>
        );
    }
}

export default StudentsAppeals;
