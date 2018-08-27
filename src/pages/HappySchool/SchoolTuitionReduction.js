import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card, Button, Icon, Divider } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';


class SchoolTuitionReduction extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '就學優待減免',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, MainContent, ItemTitleH1, ItemTitleH2, ItemTitleH3, DividerShort } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>給卹期內軍公教遺族</Text>
                    <Text style={ ItemTitleH2 }>應檢驗證件</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH3 }>1.全戶戶籍謄本</Text>
                    <Text style={ ItemTitleH3 }>2.撫卹令或年撫卹金證書，軍人遺族應繳交國防部核發之撫卹令、卹亡給與令。公教遺族繳交銓敘部或教育行政主管機關核發之年撫卹金證書</Text>
                    <Text style={ ItemTitleH2 }>注意事項</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH3 }>1.核對是否尚在撫卹期間內。</Text>
                    <Text style={ ItemTitleH3 }>2.卹內軍公教遺族分：</Text>
                    <Text style={ MainContent }>{'\t'}全公費(因公死亡)</Text>
                    <Text style={ MainContent }>{'\t'}半公費(因病死亡或意外死亡)</Text>
                    <Text style={ ItemTitleH3 }>3.如遺族父或母親為現職軍公教人員，請另檢附未領子女教育補助費證明。</Text>
                    <Text style={ ItemTitleH3 }>4.事業機構遺族請勿申請，持榮民傷殘撫卹令及撫慰金證書者不得減免。</Text>
                    <Text style={ ItemTitleH3 }>5.證件未登載申請優待學生姓名者無效，請學生逕向銓敘部或教育行政主管機關或國防部後備司令部留守處申請核發領受撫卹金之相關證明。</Text>
                    <Text style={ ItemTitleH3 }>6.卹內軍公教遺族減免之主、副食費之發給，每學年分上、下學期發給，以當年8月至翌年1月，計6個月為上學期；2月至7月，計6個月為下學期（應屆畢業生為2月至6月，計5個月）；新生則自申請經核准之該學期註冊月份起計。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>給卹期滿軍公教遺族</Text>
                    <Text style={ ItemTitleH2 }>應檢驗證件</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH3 }>1.全戶戶籍謄本</Text>
                    <Text style={ ItemTitleH3 }>2.撫卹令、撫卹金證書、軍人遺族領受一次撫卹金者在享受各種優待期限內准予比照卹滿辦理</Text>
                    <Text style={ ItemTitleH2 }>注意事項</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH3 }>1.核對是否尚在撫卹期間內。</Text>
                    <Text style={ ItemTitleH3 }>2.卹內軍公教遺族分：</Text>
                    <Text style={ MainContent }>{'\t'}全公費(因公死亡)</Text>
                    <Text style={ MainContent }>{'\t'}半公費(因病死亡或意外死亡)</Text>
                    <Text style={ ItemTitleH3 }>3.如遺族父或母親為現職軍公教人員，請另檢附未領子女教育補助費證明。</Text>
                    <Text style={ ItemTitleH3 }>4.事業機構遺族請勿申請，持榮民傷殘撫卹令及撫慰金證書者不得減免。</Text>
                    <Text style={ ItemTitleH3 }>5.證件未登載申請優待學生姓名者無效，請學生逕向銓敘部或教育行政主管機關或國防部後備司令部留守處申請核發領受撫卹金之相關證明。</Text>
                    <Text style={ ItemTitleH3 }>6.卹內軍公教遺族減免之主、副食費之發給，每學年分上、下學期發給，以當年8月至翌年1月，計6個月為上學期；2月至7月，計6個月為下學期（應屆畢業生為2月至6月，計5個月）；新生則自申請經核准之該學期註冊月份起計。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>現役軍人子女</Text>
                    <Text style={ ItemTitleH2 }>應檢驗證件</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH3 }>1.全戶戶籍謄本</Text>
                    <Text style={ ItemTitleH3 }>2.眷屬身分證</Text>
                    <Text style={ ItemTitleH2 }>注意事項</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH3 }>1.查核其家長是否為現役軍人。</Text>
                    <Text style={ ItemTitleH3 }>2.由學校自行查驗，無須報部核定。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>身心障礙學生</Text>
                    <Text style={ ItemTitleH2 }>應檢驗證件</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH3 }>1.全戶戶籍謄本</Text>
                    <Text style={ ItemTitleH3 }>2.身心障礙手冊（影本）</Text>
                    <Text style={ ItemTitleH3 }>3.鑑輔會證明文件（請檢視正本，留存影本）</Text>
                    <Text style={ ItemTitleH2 }>注意事項</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH3 }>1.身心障礙之等級請確實核對。</Text>
                    <Text style={ ItemTitleH3 }>2.所持身心障礙手冊之有效期限或後續鑑定日期。</Text>
                    <Text style={ ItemTitleH3 }>3.學習障礙：檢附鑑輔會證明文件。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>身心障礙人士子女</Text>
                    <Text style={ ItemTitleH2 }>應檢驗證件</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH3 }>1.全戶戶籍謄本</Text>
                    <Text style={ ItemTitleH3 }>2.身心障礙手冊（影本）</Text>
                    <Text style={ ItemTitleH2 }>注意事項</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH3 }>1.所持身心障礙手冊與學生之關係。</Text>
                    <Text style={ ItemTitleH3 }>2.身心障礙之等級請確實核對。</Text>
                    <Text style={ ItemTitleH3 }>3.所持身心障礙手冊之有效期限或後續鑑定日期。</Text>
                    <Text style={ ItemTitleH3 }>4.繼父母為身心障礙人士與學生應具收養關係始為法律上之父（母）子（女）。</Text>
                    <Text style={ ItemTitleH3 }>5.父母無法行使親權，同居之祖父母始為法定監護人。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>低收入戶學生及中低收入戶學生</Text>
                    <Text style={ ItemTitleH2 }>應檢驗證件</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH3 }>1.全戶戶籍謄本</Text>
                    <Text style={ ItemTitleH3 }>2.低收入戶及中低收入戶證明（其備註欄格式內須註明減免學生之姓名）</Text>
                    <Text style={ ItemTitleH2 }>注意事項</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH3 }>1.所持證明有效期限及學生身分證號碼。</Text>
                    <Text style={ ItemTitleH3 }>2.請確認學生是否被納入低收入戶或中低收入人口內，此項可請公所開具低收入戶人口證明。</Text>
                    <Text style={ ItemTitleH3 }>3.相關申請事項請逕洽各縣市社會救助業務聯絡窗口。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>原住民學生</Text>
                    <Text style={ ItemTitleH2 }>應檢驗證件</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH3 }>全戶戶籍謄本</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>特殊境遇家庭之子女</Text>
                    <Text style={ ItemTitleH2 }>應檢驗證件</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH3 }>1.全戶戶籍謄本</Text>
                    <Text style={ ItemTitleH3 }>2.特殊境遇家庭身分證明文件（請檢視正本，其公文內須註明減免學生之姓名，留存影本）</Text>
                    <Text style={ ItemTitleH2 }>注意事項</Text>
                    <Divider style={ DividerShort } />
                    <Text style={ ItemTitleH3 }>1.所持特殊境遇家庭身分證明文件與學生之關係。</Text>
                    <Text style={ ItemTitleH3 }>2.所持特殊境遇家庭身分證明文件之有效期限。</Text>
                    <Text style={ ItemTitleH3 }>3.如家中有兩名以上學生，可接受影本但需請直轄市、縣（市）政府社會局（科）或鄉（鎮、市、區）公所加蓋與正本相符之戳章。</Text>
                </View>
            </ScrollView>
        );
    }
}

export default SchoolTuitionReduction;
