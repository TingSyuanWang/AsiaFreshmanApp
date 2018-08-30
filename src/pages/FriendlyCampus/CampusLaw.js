import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card, Button, Icon, Divider } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class CampusLaw extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '校園法律宣導',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, MainContent, MainContentRed, ItemTitleH1, ItemTitleH2, ItemTitleH3, DividerLong } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>案例一</Text>
                    <Text style={ ItemTitleH2 }>某大學男學生去年在網路結識十五歲女網友，兩人酒後發生性行為並於自己租屋處性交三次。後經少女父親提告，地院法官認為兩人性交，雖未違反少女意願，但男學生與未成年少女性交，即觸犯妨害性自主罪。</Text>
                    <Text style={ ItemTitleH2 }>刑法規定妨害性自主罪章，條文如下：</Text>
                    <Text style={ ItemTitleH3 }>第227條</Text>
                    <Text style={ ItemTitleH3 }>【第一項】對於未滿十四歲之男女為性交者，處三年以上十年以下有期徒刑。</Text>
                    <Text style={ ItemTitleH3 }>【第二項】對於未滿十四歲之男女為猥褻之行為者，處六個月以上五年以下有期徒刑。</Text>
                    <Text style={ ItemTitleH3 }>【第三項】對於十四歲以上未滿十六歲之男女為性交者，處七年以下有期徒刑。</Text>
                    <Text style={ ItemTitleH3 }>【第四項】對於十四歲以上未滿十六歲之男女為猥褻之行為者，處三年以下有期徒刑。</Text>
                    <Text style={ ItemTitleH3 }>【第五項】第一項、第三項之未遂犯罰之。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>案例二</Text>
                    <Text style={ ItemTitleH2 }>某大學女學生盜用五名同學帳號與密碼，上網登入該校電腦系統，瀏覽他們的選課狀況後，惡作劇按壓「退選鍵」，把其中兩位同學原本選定的課程給退掉，檢方依妨害電腦使用罪起訴。</Text>
                    <Text style={ ItemTitleH2 }>刑法規定妨害電腦使用罪章，條文如下：</Text>
                    <Text style={ ItemTitleH3 }>第358條無故輸入他人帳號密碼、破解使用電腦之保護措施或利用電腦系統之漏洞，而入侵他人之電腦或其相關設備者，處三年以下有期徒刑、拘役或科或併科十萬元以下罰金。</Text>
                    <Text style={ ItemTitleH3 }>第359條無故取得、刪除或變更他人電腦或其相關設備之電磁紀錄，致生損害於公眾或他人者，處五年以下有期徒刑、拘役或科或併科二十萬元以下罰金。</Text>
                    <Text style={ ItemTitleH3 }>第363條第三百五十八條至第三百六十條之罪，須告訴乃論。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH1 }>案例三</Text>
                    <Text style={ ItemTitleH2 }>某大學學生影印教科書，檢察官首度對為求省錢而非法影印教科書的大學生求處拘役以示警惕，以往相關案例多只追究業者的責任，這次檢方首開全國先例起訴學生並求刑。依照著作權法第91條第1項及同法第88條等規定，必須負擔民、刑事責任。由於智慧有價，學生實難以原文書售價較高作為使用盜版書籍之藉口而免責。對於教科書的影印，著作權法固然制訂了一些「合理使用」的規定，在影印的數量很少，佔教科書整體的比例不大，且對教科書市場影響有限的合理範圍情況下，可以不必得到授權，即可合法使用。但如果是整本影印、化整為零或分批影印達到整本影印的效果，抑或是像前述報載案例影印教科書將近一半頁數，對於著作市場會 產生取代的結果，很難被認可為「合理使用」。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>防詐騙手冊-八種詐騙預防小叮嚀</Text>
                    <Divider style={ DividerLong } />
                    <Text style={ ItemTitleH3 }>防騙第一部【假警察、檢察官辦案詐騙】</Text>
                    <Text style={ MainContent }>詐騙電話關鍵字：醫院通知領藥、申請重病補助！</Text>
                    <Text style={ MainContent }>銀行通知有人來領你的存款！</Text>
                    <Text style={ MainContent }>警察通知你個人資料被冒用！</Text>
                    <Text style={ MainContent }>檢察官說你是詐欺人頭戶！</Text>
                    <Text style={ MainContent }>去超商收法院公文傳真！</Text>
                    <Text style={ MainContent }>要將存款領出來監管帳戶！</Text>
                    <Text style={ MainContentRed }>預防假檢警詐騙，請牢記「一聽、二掛、三查」！</Text>
                    <Text style={ MainContent }>反詐騙小叮嚀：</Text>
                    <Text style={ MainContent }>一聽！聽清楚這個電話說什麼？</Text>
                    <Text style={ MainContent }>是否有以上關鍵字？</Text>
                    <Text style={ MainContent }>二掛！聽完後，立刻掛斷這通電話</Text>
                    <Text style={ MainContent }>不讓歹徒繼續操控你的情緒</Text>
                    <Text style={ MainContent }>三查！快撥165反詐騙專線查證！</Text>
                    <Text style={ MainContent }>將剛才聽到的電話內容告訴165</Text>
                    <Divider style={ DividerLong } />
                    <Text style={ ItemTitleH3 }>防騙第二部【購物個資外洩詐騙】</Text>
                    <Text style={ MainContent }>詐騙電話關鍵字：向您核對購買商品日期、金額！</Text>
                    <Text style={ MainContent }>說您收商品時簽單錯誤！</Text>
                    <Text style={ MainContent }>帳戶設定錯誤，變成分期付款！</Text>
                    <Text style={ MainContent }>晚間12點後開始扣款！</Text>
                    <Text style={ MainContent }>要去自動提款機取銷分期付款設定！</Text>
                    <Text style={ MainContent }>自動提款機沒有取銷分期付款功能！</Text>
                    <Text style={ MainContent }>預防購物個資外洩詐騙，請牢記「一聽、二掛、三查」！</Text>
                    <Text style={ MainContent }>反詐騙小叮嚀：一聽！聽清楚這個電話說什麼？</Text>
                    <Text style={ MainContent }>是否有以上關鍵字？</Text>
                    <Text style={ MainContent }>二掛！聽完後，立刻掛斷這通電話</Text>
                    <Text style={ MainContent }>不讓歹徒繼續操控你的情緒</Text>
                    <Text style={ MainContent }>三查！快撥165反詐騙專線查證！</Text>
                    <Text style={ MainContent }>將剛才聽到的電話內容告訴165</Text>
                    <Divider style={ DividerLong } />
                    <Text style={ ItemTitleH3 }>防騙第三部【網路購物詐騙】</Text>
                    <Text style={ MainContent }>詐騙關鍵字：開msn，跳出交易平台，另談交易細節！</Text>
                    <Text style={ MainContent }>商品已缺貨，要買要快！</Text>
                    <Text style={ MainContent }>賣家在偏遠地區不便當面交易，只受理匯款！</Text>
                    <Text style={ MainContent }>不信可先付一半訂金，貨到再付另一半！</Text>
                    <Text style={ MainContent }>反詐騙小叮嚀：</Text>
                    <Text style={ MainContent }>1.網路世界虛擬多變，請堅持面交商品。</Text>
                    <Text style={ MainContent }>2.與市價相差太多商品，就要小心有詐。</Text>
                    <Text style={ MainContent }>3.已買不到的商品如入場券，要考慮賣家的商品來源，為確保交易安全，務必堅持當面交易，並可請售票系統商家，查驗票卷真偽。</Text>
                    <Divider style={ DividerLong } />
                    <Text style={ ItemTitleH3 }>防騙第四部【網路援交詐騙】</Text>
                    <Text style={ MainContent }>詐騙關鍵字：女網友主動邀約見面！</Text>
                    <Text style={ MainContent }>見面前要去自動提款機！</Text>
                    <Text style={ MainContent }>以自動提款機匯援交費！</Text>
                    <Text style={ MainContent }>要辨識身分（非軍人或警察在釣魚）！</Text>
                    <Text style={ MainContent }>自動提款機操作錯誤！</Text>
                    <Text style={ MainContent }>黑道分子恐嚇要配合更正錯誤！</Text>
                    <Text style={ MainContent }>反詐騙小叮嚀：</Text>
                    <Text style={ MainContent }>1.網友相約見面前，要求操作自動提款機就是詐騙！</Text>
                    <Text style={ MainContent }>2.自動提款機沒有身分辨識功能！</Text>
                    <Text style={ MainContent }>3.一旦發現自動提款機操作出錯，或遇到恐嚇，應立刻撥打165反詐騙專線報案。</Text>
                    <Divider style={ DividerLong } />
                    <Text style={ ItemTitleH3 }>防騙第五部【求職詐騙】</Text>
                    <Text style={ MainContent }>詐騙關鍵字：網路或報紙刊登徵人廣告！</Text>
                    <Text style={ MainContent }>廣告只刊登行動電話！</Text>
                    <Text style={ MainContent }>電話中要求至車站、超商等公共場所面試！</Text>
                    <Text style={ MainContent }>要求交出金融卡或到自動提款機辦理薪資入帳！</Text>
                    <Text style={ MainContent }>要求先付保證金或置裝費！</Text>
                    <Text style={ MainContent }>要求申辦行動電話！</Text>
                    <Text style={ MainContent }>反詐騙小叮嚀：</Text>
                    <Text style={ MainContent }>1.歹徒經常以求職廣告騙取提款卡或存摺，或騙取求職者資料辦理行動電話門號，求職者勿交出重要個人資料，以免成為詐騙人頭戶。</Text>
                    <Text style={ MainContent }>2.未查明公司營運、資本實際狀況下，勿輕易投資。</Text>
                    <Text style={ MainContent }>3.拒絕刷卡買產品衝業績的工作要求。</Text>
                    <Text style={ MainContent }>4.未正式工作前，不要操作自動提款機，辦理薪資入帳設定，這也是常見詐騙陷阱。</Text>
                    <Divider style={ DividerLong } />
                    <Text style={ ItemTitleH3 }>防騙第六部【中獎、投資詐騙】</Text>
                    <Text style={ MainContent }>詐騙關鍵字：</Text>
                    <Text style={ MainContent }>【電話詐騙】公司舉辦抽獎活動，要您到場共襄盛舉！</Text>
                    <Text style={ MainContent }>恭喜您已中獎！</Text>
                    <Text style={ MainContent }>提供海外銀行電話可查證獎金已入帳！</Text>
                    <Text style={ MainContent }>要交入會費、所得稅，才能領回獎金！</Text>
                    <Text style={ MainContent }>【網路詐騙】網友在海外是六合彩、賽馬會、投資顧問公司職員！提供投資機會！</Text>
                    <Text style={ MainContent }>電話通知您已獲利，快去匯款贖回獲利！</Text>
                    <Text style={ MainContent }>海關查獲地下匯兌，要付關說費！</Text>
                    <Text style={ MainContent }>反詐騙小叮嚀：</Text>
                    <Text style={ MainContent }>1.中獎電話、公司地點、匯款銀行都在國外，查證不易，勿輕易匯款。</Text>
                    <Text style={ MainContent }>2.165反詐騙專線數位資料庫，可協助查詢冒名詐騙公司名稱。</Text>
                    <Divider style={ DividerLong } />
                    <Text style={ ItemTitleH3 }>防騙第七部【家戶拜訪詐騙】</Text>
                    <Text style={ MainContent }>詐騙關鍵字：自稱是台電、瓦斯公司檢查管線！</Text>
                    <Text style={ MainContent }>要更換水電、瓦斯管線並收費！</Text>
                    <Text style={ MainContent }>自稱是退輔會，關懷榮民訪問！</Text>
                    <Text style={ MainContent }>自稱是社會局，老人居家訪視！</Text>
                    <Text style={ MainContent }>可以申請生活津貼！</Text>
                    <Text style={ MainContent }>自稱是黨部，請求支持競選人！</Text>
                    <Text style={ MainContent }>可領選舉後謝金！</Text>
                    <Text style={ MainContent }>要拿出存摺並告知密碼！</Text>
                    <Text style={ MainContent }>預防家戶拜訪詐騙，請牢記「一關、二問、三查」！</Text>
                    <Text style={ MainContent }>反詐騙小叮嚀：一關！將大門關上，以防歹徒侵入家中。</Text>
                    <Text style={ MainContent }>二問！隔著門問來者姓名、單位、何事來訪。</Text>
                    <Text style={ MainContent }>三查！快撥165反詐騙專線查證！</Text>
                    <Text style={ MainContent }>可查明來者身分以及到訪是否屬實。</Text>
                    <Divider style={ DividerLong } />
                    <Text style={ ItemTitleH3 }>防騙第八部【假親友詐騙】</Text>
                    <Text style={ MainContent }>詐騙關鍵字：自稱是您的親人（兒女、兄弟、叔伯、姐妹）！</Text>
                    <Text style={ MainContent }>自稱是同事、同學、軍中弟兄！</Text>
                    <Text style={ MainContent }>先問候話家常！</Text>
                    <Text style={ MainContent }>再藉口處理緊急狀況，或正在醫院向你借錢！</Text>
                    <Text style={ MainContent }>反詐騙小叮嚀：</Text>
                    <Text style={ MainContent }>1.歹徒會以各種手段取得個人資料，再假冒親友熟人借錢。</Text>
                    <Text style={ MainContent }>2.接到親友來電，並提出借錢要求，且不斷來電表示非常緊急，請以現在不方便接聽電話，先掛斷這通電話。</Text>
                    <Text style={ MainContent }>3.找出自己的通訊錄，主動撥打親友電話號碼，並查證是否需要借錢。</Text>
                </View>
            </ScrollView>
        );
    }
}

export default CampusLaw;
