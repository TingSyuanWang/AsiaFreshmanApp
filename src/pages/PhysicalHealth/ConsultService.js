import React, { Component } from 'react';
import { Text, ScrollView, View, Linking } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';

class ConsultService extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '諮商輔導 & 資源教室服務',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, MainContent, ItemTitleH2, ItemTitleH3 } = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <Text style={ ItemTitleH2 }>健康中心分別於行政大樓(L101)和資源教室(H101)提供諮商輔導服務，健康中心是亞洲大學學生心理健康的守護神，我們的使命是協助學生達成人生與學業目標與提升個人成長與幸福感。大學生活多彩多姿，卻又充滿挑戰。大學期間若是經歷生活適應困難、對未來生涯感到徬徨、招架不住課業的壓力、面臨愛情苦惱、遇到人際互動困擾，或是想增進自我了解，都歡迎來健康中心來談心情、說心事。</Text>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>健康中心(諮商輔導)提供給學生的資源包括：</Text>
                    <Text style={ ItemTitleH3 }>個別諮商：當有難以言喻的心情梗在心中時，歡迎到健康中心(諮商輔導)填寫「個別晤談資料表」及留下聯絡方式，我們會幫學生安排諮輔老師、晤談時段及地點，透過與諮輔老師的互動，對自己有更多的了解，同時澄清自己的問題，找到可能的解決之道。</Text>
                    <Text style={ ItemTitleH3 }>心理測驗：健康中心的各式心理測驗是一個經過科學方法設計的工具，用來探索個人的人格特質、興趣、性向、價值觀等等，幫助學生更了解自己的心理狀態。也由於各個測驗都是由專業的機構運用心理學理論編製而成，在學生完成測驗後，受過訓練的諮輔人員會為學生解釋測驗的結果。</Text>
                    <Text style={ ItemTitleH3 }>團體心理測驗：若班級導師或同學有特定主題之共同需求，也歡迎提出團體心理測驗之申請，我們會進行施測及解釋。</Text>
                    <Text style={ ItemTitleH3 }>團體諮商與工作坊：我們會不定期辦理「自我探索」、「人際關係」、「生涯探索」、「情緒與壓力管理」等各式團體及工作坊，在保護成員隱私的氛圍中，可以自在拋出想談的議題，分享彼此的想法與經驗，透過相互激盪，可以讓成員更了解自己，也可以聽到別人的經驗，更有趣的是從他人眼中看到自己，甚至讓成員彼此獲得成長與支持。</Text>
                    <Text style={ ItemTitleH3 }>心靈成長講座：每學期舉辦4~6場心靈成長講座，主題包括「生命教育」、「性別平等」、「人際溝通」、「情感交往」等，讓同學透過講座活動提升健康力。</Text>
                    <Text style={ ItemTitleH3 }>學輔時間開課：每學期我們會安排固定堂數、主題性的班級講座讓班級導師申請，班級導師可針對班上同學需求進行選課作業。</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>「資源教室」提供給學生的資源包括：</Text>
                    <Text style={ ItemTitleH3 }>視聽影片借閱：這裡有多部視聽影片，只要持學生證或有照證件完成借閱程序，就可以將借閱視聽影片帶回家享受心靈饗宴。</Text>
                    <Text style={ ItemTitleH3 }>協助輔具申請：如果有使用輔具的需求，可以持教育部核發之鑑定證明或身心障礙證明（手冊）到資源教室，會有老師協助學生申請，使學習和生活便利無礙。</Text>
                    <Text style={ ItemTitleH3 }>受理協助同學申請：如果在課業學習上遇到困難，需要同學協助，可以自行找一位協助同學，並填妥協助同學申請表、準備身心障礙證明（手冊）及申請學生與協助同學之課表及學生證，到資源教室提出申請，就可以在充份的資源下快樂學習。</Text>
                    <Text style={ ItemTitleH3 }>個人電腦使用：如果需要使用電腦做作業、上網查資料或是列印文件，都可以借用電腦和印表機，讓學生不論是在課業或是知識上零時差。</Text>
                    <Text style={ ItemTitleH3 }>除了提供上述豐富資源外，「健康中心」不定時會舉辦電影欣賞和演講等活動，「資源教室」也會為身心障礙學生舉辦樂活休閒活動，如：迎新送舊、節慶活動、戶外活動、生涯探索，讓大家在求學的旅程上既豐富又多采！</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>聯絡方式：</Text>
                    <Text style={ ItemTitleH3 }>電話：04-22323456 # 6265-6269、6285、1748、1768(諮商輔導)；</Text>
                    <Text style={ ItemTitleH3 }>1739、1741、1744、1745、1751 (資源教室)</Text>
                    <Text style={ ItemTitleH3 }>電子信箱：</Text>
                    <Text style={ ItemTitleH3 }>諮商輔導 => 一般行政信箱：care@asia.edu.tw</Text>
                    <Text style={ ItemTitleH3 }>安心信箱Email：standbyyou@asia.edu.tw這個信箱只提供緊急心理諮詢、危機狀況(有緊急危害生命安全的可能等)使用，我們會盡快回覆你/妳的來信。</Text>
                    <Text style={ ItemTitleH3 }>資源教室 => weilan@asia.edu.tw(張佩宸老師)、tinglee@asia.edu.tw(李依婷老師)、chuang.wanting@asia.edu.tw (莊琬婷老師)、kevin1266v@asia.edu.tw(謝志中老師)、tzuhsuan@asia.edu.tw (陳子萱老師)。</Text>
                    <Text style={ ItemTitleH3 }>健康中心網址：</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='健康中心網址' onPress={ ()=>{ Linking.openURL('http://healthyau.asia.edu.tw')}} />
                    <Text style={ ItemTitleH3 }>FB粉絲團：</Text>
                    <Button buttonStyle={{ marginTop: 10, marginBottom: 10 }} icon={{name: 'account-balance'}} backgroundColor="#228B22" title='亞洲諮輔' onPress={ ()=>{ Linking.openURL('https://www.facebook.com/CAREASIA')}} />
                    <Text style={ ItemTitleH3 }>開放時間：</Text>
                    <Text style={ MainContent }>諮商輔導→週一至週五 上午8:00~下午5:00 地點：L101(行政大樓)</Text>
                    <Text style={ MainContent }>資源教室→週一至週五 上午8:00~下午5:00 地點：H101(資訊電機大樓電梯對面，近亞蒂菲廚房)</Text>
                </View>
                <View style={ ViewSubContainer }>
                    <Text style={ ItemTitleH2 }>【揮別低頭族，一起來諮心】</Text>
                    <Text style={ MainContent }>你/妳還在整天低著頭滑滑滑嗎?有多久沒有抬起頭來看見幸福~ Go!一起來熱血~揮灑青春的汗水~ 拋開手機~讓愛傳遞!歡迎加入諮心知新社~</Text>
                    <Text style={ ItemTitleH3 }>招募對象：凡本校學生不限學系，具有服務熱忱，對自我探索有興趣，願意關懷本校身心障礙學生，且每週可固定時間值班、協助活動者，均可報名參加。</Text>
                    <Text style={ ItemTitleH3 }>招募時間：請洽學務處健康中心資源教室</Text>
                    <Text style={ ItemTitleH3 }>活動安排：</Text>
                    <Text style={ MainContent }>1.免費參加豐富精采的培訓課程，充實自我內涵。</Text>
                    <Text style={ MainContent }>2.進階課程的安排，提供社員持續成長的機會。</Text>
                    <Text style={ MainContent }>3.增進同儕關係並能於服務中學習。</Text>
                    <Text style={ MainContent }>4.不定期舉辦同樂活動，增進生活樂趣。</Text>
                    <Text style={ MainContent }>5.工作服務可獲服務證書，作為未來就業或升學之自我推薦證明。</Text>
                    <Text style={ ItemTitleH3 }>報名方式：意者可至健康中心資源教室(資訊電機大樓H101)填寫報名表，經培訓、面試合格及見習合格後即可成為健康中心資源教室諮心知新社正式社員。</Text>
                </View>
            </ScrollView>
        );
    }
}

export default ConsultService;
