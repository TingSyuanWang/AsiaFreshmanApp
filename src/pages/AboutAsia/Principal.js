import React, { Component } from 'react';
import {Text, ScrollView, View, Image, StyleSheet} from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class Military extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '校長的話',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.reset({index: 0, actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainerNoBorder, ItemTitleH3, ImageStyle4, Signature } = customStyles;

        return (

            <ScrollView style={ ViewContainer }>
                <View style={ ViewSubContainerNoBorder }>
                    <Text style={ ItemTitleH3 }>校長的話</Text>
                    <Text style={ ItemTitleH3 }>親愛的同學，歡迎加入亞洲大學！</Text>
                    <Text style={ ItemTitleH3 }>本校秉持創辦人蔡長海博士「以培育自己小孩之心境來培育別人小孩」之理念積極辦學，辦學績效多獲肯定；尤其在國際四大世界大學排名機構上皆受國際認同，如本校連續榮獲泰晤士報2018亞太區250大最佳大學排名等12個項目百大大學、QS 2018年亞洲最佳大學排行榜400名內、美國新聞與世界報導2018全球最佳大學排名第1055名、上海交通大學2018世界大學學術排名第888名；在國內，更獲《Cheers》雜誌評選2018年全國「Top20」學校，連續4年名列前茅，其中，「外國交換學生人數」項目更名列全台第4名、私大第1名，另獲遠見雜誌2018評為學術成就、辦學聲望等20強內；此外，近四年榮獲教育部「台灣學生參加藝術與設計類國際競賽」高教體系第一名。</Text>
                    <Text style={ ItemTitleH3 }>我們亦有多項獎助學金，協助你完成四年的學業，包括：學業績優獎學金、學術表現才藝績優獎學金、就學貸款、學雜費減免及弱勢助學(含工讀)等相關其助學措施歡迎洽詢學務處生輔組(分機3211)。</Text>
                    <Text style={ ItemTitleH3 }>我們也重視「三品教育」，提倡品德、品質、品味的培養，並推動「志工大學」、「五創學園」、「學用合一」，設立學習、生活、曼陀師及就業導師，從第一哩路到最後一哩路，輔導學生就業、創業，積極提升學生競爭力；並已與多位創業校友、在校生簽署創業備忘錄，提供獎勵金，協助優秀同學創業；更首創諾貝爾大師論壇，已邀請20多位諾貝爾級學者與國際大師蒞校，讓師生近距離親炙國際學者的風範</Text>
                    <Text style={ ItemTitleH3 }>為提供學生優質學習環境，本校與中國醫藥大學成立教育部認可之「中亞聯大」教學系統，致力教學、研究、跨領域學習等資源共享；此外，亞大附屬醫院提供同學最佳實作實習場域。另普利茲克獎得主安藤忠雄先生設計之「亞洲大學現代美術館」已成為大台中市新地標，刻正展出「蔣勳．美學．創作教育」特展，歡迎你/妳來親自感受清水模建築與藝術之美。</Text>
                    <Text style={ ItemTitleH3 }>亞洲大學為一綠意盎然的花園大學，典雅的校園建築，襯托大小荷花池和太極湖，荷香凌波，桃李成蹊，更擁有羅丹、阿曼、竇加、妮基、朱德群、楊英風，以及劉國松等多位國內外大師藝術真品。如此雅而美的校園，有約4,500個床位的多棟學生宿舍大樓點綴其中，亞洲大學要給所有的學生最好的就學環境、最大的成就。竭誠歡迎加入亞洲大學的行列！</Text>
                    <Text style={ ItemTitleH3 }>敬祝 闔家安康</Text>
                    <View style={ Signature }>
                        <Text style={ ItemTitleH3 }>校長  </Text>
                        <Image style={ ImageStyle4 } resizeMode={'stretch'} source={require('../../img/PrincipalName.jpg')}/>
                    </View>
                    <Text style={ ItemTitleH3 }>謹誌於107.08.16</Text>
                </View>
            </ScrollView>

        );
    }
}

export default Military;

