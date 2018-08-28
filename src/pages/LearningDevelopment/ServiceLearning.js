import React, { Component } from 'react';
import {Text, ScrollView, View, Linking, Image} from 'react-native';
import { Icon, Divider, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { customStyles } from '../../assets/customStyle';


class ServiceLearning extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: '服務與學習',
        headerRight: <Icon containerStyle={{ marginRight: 5 }} name='home' onPress={() => navigation.dispatch(
            NavigationActions.navigate({routeName: 'Homepage', actions: [NavigationActions.navigate({routeName: 'Homepage'})]})
        )} />
    });

    render () {
        const { ViewContainer, ViewSubContainer, MainContent, ItemTitleH1, ItemTitleH2, ItemTitleH2Red, ItemTitleH3, DividerShort, DividerLong, ImageStyle10, ItemTitleH4, ImageStyle11, ItemTitleH5} = customStyles;

        return (
            <ScrollView style={ ViewContainer }>
                <Text style={ ItemTitleH1 }>一、為什麼會有「服務與學習課程」？</Text>
                    <View style={ ViewSubContainer }>
                        <Text style={ ItemTitleH2 }>課程目的：讓學生於服務過程中學習關懷的精神，並以「做中學、學中做」中，培養良好的品格及愛校盡責的價值觀，成為健全優良的「三品」人。</Text>
                        <Text style={ ItemTitleH2 }>實施對象：大學日間部學制之學生。【含大一生、轉學(系)生、重修生、復學生】</Text>
                    </View>
                <Text style={ ItemTitleH1 }>二、「服務與學習課程」包含那些課程內容？</Text>
                    <View style={ ViewSubContainer }>
                        <Text style={ ItemTitleH2 }>服務與學習為校定必修/零學分課程；需於畢業前完成下列4門課程，本校所持之志願服務紀錄冊為教育類。</Text>
                        <Text style={ ItemTitleH2 }>上學期</Text>
                        <Divider style={ DividerShort } />
                        <Text style={ ItemTitleH3 }>服務與學習（一）－實作課</Text>
                        <Text style={ ItemTitleH3 }>備註:不可退選可停修</Text>
                        <Text style={ ItemTitleH3 }>服務與學習（一）－講授課(5班)</Text>
                        <Text style={ ItemTitleH3 }>備註:不可停修</Text>
                        <Text style={ ItemTitleH3 }>服務與學習（二）－講授課(1班)</Text>
                        <Text style={ ItemTitleH3 }>備註:不可停修</Text>
                        <Text style={ ItemTitleH2 }>下學期</Text>
                        <Divider style={ DividerShort } />
                        <Text style={ ItemTitleH3 }>服務與學習（二）－實作課</Text>
                        <Text style={ ItemTitleH3 }>備註:不可退選可停修</Text>
                        <Text style={ ItemTitleH3 }>服務與學習（一）－講授課(1班)</Text>
                        <Text style={ ItemTitleH3 }>備註:不可停修</Text>
                        <Text style={ ItemTitleH3 }>服務與學習（二）－講授課(5班)</Text>
                        <Text style={ ItemTitleH3 }>備註:不可停修</Text>

                        <Text style={ ItemTitleH3 }>提醒一、實作課入學第一年由學校統一帶課並安排校內服務區域</Text>
                        <Text style={ ItemTitleH3 }>提醒二、講授課於開學後教務處公告加退選期間自行選課(加退選結束後不可再加選或退選)</Text>
                        <Text style={ ItemTitleH3 }>提醒三、需先完成服務與學習(一)-講授課，始可選修服務與學習(二)-講授課</Text>

                        <Divider style={ DividerLong } />

                        <Text style={ ItemTitleH3 }>課程名稱：</Text>
                        <Text style={ ItemTitleH3 }>服務與學習(一)-實作課</Text>
                        <Text style={ ItemTitleH3 }>課程內容：</Text>
                        <Text style={ ItemTitleH3 }>校園環境一般服務、行政/教學單位外展服務、校外多元服務</Text>

                        <Text style={ ItemTitleH3 }>課程名稱：</Text>
                        <Text style={ ItemTitleH3 }>服務與學習(二)-實作課</Text>
                        <Text style={ ItemTitleH3 }>課程內容：</Text>
                        <Text style={ ItemTitleH3 }>校園環境一般服務、行政/教學單位外展服務、校外多元服務</Text>

                        <Text style={ ItemTitleH3 }>課程名稱：</Text>
                        <Text style={ ItemTitleH3 }>服務與學習(一)-講授課</Text>
                        <Text style={ ItemTitleH3 }>課程內容：</Text>
                        <Text style={ ItemTitleH3 }>現場教學3小時+「臺北e大」志工基礎教育訓練</Text>

                        <Text style={ ItemTitleH3 }>課程名稱：</Text>
                        <Text style={ ItemTitleH3 }>服務與學習(二)-講授課</Text>
                        <Text style={ ItemTitleH3 }>課程內容：</Text>
                        <Text style={ ItemTitleH3 }>教育類志工12小時志願服務特殊教育訓練</Text>
                    </View>
                <Text style={ ItemTitleH1 }>三、開課時間</Text>
                    <View style={ ViewSubContainer }>
                        <Text style={ ItemTitleH2 }>實作課：</Text>
                        <Text style={ ItemTitleH2 }>(一)選課：9/5（三）於課服組網站公告校內外展服務單位選填作業辦法，請修課學生依規定選填服務單位，未於時間內填選外展服務單位之學生，統一由課服組隨機安排。</Text>
                        <Text style={ ItemTitleH2 }>(二)上課：9/19（三）起一般服務修課同學依課表開始正式上課(正式紀錄缺曠)；其餘外展服務及校外多元服務學生則9/21(五)前自行至各單位/機構辦理報到及進行服務。</Text>
                        <Text style={ ItemTitleH2 }>講授課：</Text>
                        <Text style={ ItemTitleH2 }>(一)選課：開學前一週於課服組網站公告各梯次上課資訊，修課學生依教務處公告｢加退選｣期間自行選課，加退選時間過後，恕不受理停修或退選。</Text>
                        <Text style={ ItemTitleH2 }>(二)上課：修課學生依各梯次上課日期出席課程，如有缺課紀錄當學期成績為不通過。 </Text>
                    </View>

                <Text style={ ItemTitleH1 }>四、抵免作業</Text>
                    <View style={ ViewSubContainer }>
                        <Text style={ ItemTitleH2 }>辦理時程：依教務處公告之抵免作業及時程配合辦理。</Text>
                        <Text style={ ItemTitleH2 }>抵免要件：</Text>
                        <Text style={ ItemTitleH3 }>服務與學習（一）－實作課 若曾於他校已修畢類似課程且成績及格，持有原學校成績證明者，即可提出抵免申請。</Text>
                        <Text style={ ItemTitleH3 }>服務與學習（二）－實作課 若曾於他校已修畢類似課程且成績及格，持有原學校成績證明者，即可提出抵免申請。</Text>
                        <Text style={ ItemTitleH3 }>服務與學習（一）－講授課 需參加亞洲大學或其他校外單位所開辦之基礎訓練課程，並取得「基礎訓練結業證書」，即可提出抵免申請。</Text>
                        <Text style={ MainContent }>(1) 104學年度起本校講授(一)為現場授課3小時及e化教學(臺北 e大)，如果僅持臺北e大學習證明抵免講授(一)恕不同意抵免。</Text>
                        <Text style={ MainContent }>(2)持臺北e大學習證明者需同時檢具志願服務特殊訓練結業證書或志願服務紀錄冊影本，同時申請講授(一)(二)抵免，始可受理申請。</Text>
                        <Text style={ ItemTitleH3 }>服務與學習（二）－講授課	</Text>
                        <Text style={ MainContent }>一、需參加亞洲大學或其他校外單位所開辦之特殊訓練課程，並取得「特殊訓練結業證書(需滿12小時)」或「志願服務紀錄冊」，即可提出抵免申請。</Text>
                        <Text style={ MainContent }>二、亦可提前於上學期修完基礎訓練課程領有結業證書後，於下學期開學前參加校內外各相關單位辦理之特殊訓練，檢附「結業證書」(需滿12小時)或「志願服務紀錄冊」後後即可抵免。</Text>
                    </View>
                <Text style={ ItemTitleH1 }>五、重修作業 ：</Text>
                    <View style={ ViewSubContainer }>
                        <Text style={ ItemTitleH3 }>課程名稱：</Text>
                        <Text style={ ItemTitleH3 }>服務與學習(一)-實作課</Text>
                        <Text style={ ItemTitleH3 }>申請規定：</Text>
                        <Text style={ ItemTitleH3 }>於「欲重修學期」之「前一學期」，依課服組公告時間至課服組辦公室辦理重修申請。【即三上欲重修實作課(一)，需於二下提出申請】</Text>
                        <Text style={ ItemTitleH3 }>課程名稱：</Text>
                        <Text style={ ItemTitleH3 }>服務與學習(二)-實作課</Text>
                        <Text style={ ItemTitleH3 }>申請規定：</Text>
                        <Text style={ ItemTitleH3 }>於「欲重修學期」之「前一學期」，依課服組公告時間至課服組辦公室辦理重修申請。【即三上欲重修實作課(一)，需於二下提出申請】</Text>

                        <Text style={ ItemTitleH3 }>課程名稱：</Text>
                        <Text style={ ItemTitleH3 }>服務與學習(一)-講授課</Text>
                        <Text style={ ItemTitleH3 }>申請規定：</Text>
                        <Text style={ ItemTitleH3 }>於「欲重修學期」之開學初，依教務處公告加退選期間自行選課。</Text>

                        <Text style={ ItemTitleH3 }>課程名稱：</Text>
                        <Text style={ ItemTitleH3 }>服務與學習(二)-講授課</Text>
                        <Text style={ ItemTitleH3 }>申請規定：</Text>
                        <Text style={ ItemTitleH3 }>於「欲重修學期」之開學初，依教務處公告加退選期間自行選課。</Text>
                        <Text style={ ItemTitleH3 }>***  實作課重修申請時程皆為每學期第7-11週  ***</Text>
                    </View>
                <Text style={ ItemTitleH1 }>六、服務學習課程承辦人分機：</Text>
                    <View style={ ViewSubContainer }>
                        <Text style={ ItemTitleH2 }>組長：</Text>
                        <Text style={ ItemTitleH2 }>賴昭吟老師分機：3290</Text>
                        <Text style={ ItemTitleH2 }>職員：</Text>
                        <Text style={ ItemTitleH2 }>服務與學習－實作課：何潔予助理分機：3291</Text>
                        <Text style={ ItemTitleH2 }>服務與學習－講授課：詹喬羽助理分機：3292</Text>
                    </View>
                <Text style={ ItemTitleH1 }>七、服務學習精神理念：</Text>
                    <View style={ ViewSubContainer }>
                        <Text style={ ItemTitleH2 }>一、服務與學習理念及目的</Text>
                        <Text style={ ItemTitleH3 }>(一) 鼓勵學生關懷社會、愛護環境、服務人群</Text>
                        <Text style={ ItemTitleH3 }>(二) 培養學生實際動手執行的習慣與能力</Text>
                        <Text style={ ItemTitleH3 }>(三) 激勵學生身心靈全面均衡發展</Text>
                        <Text style={ ItemTitleH3 }>(四) 培育學生具備良好的生活習慣與熱忱的服務精神，及管理自我和交付任務的能力</Text>
                    </View>
                    <View style={ ViewSubContainer }>
                        <Text style={ ItemTitleH2 }>二、服務與學習方案的發展</Text>
                        <Text style={ ItemTitleH3 }>(一) 準備階段(Preparation)</Text>
                        <Text style={ ItemTitleH3 }>(二) 服務階段(Service)</Text>
                        <Text style={ ItemTitleH3 }>(三) 反思階段(Reflection)</Text>
                        <Text style={ ItemTitleH3 }>(四) 慶賀階段(Celebration)</Text>
                    </View>
                    <View style={ ViewSubContainer }>
                        <Text style={ ItemTitleH2 }>三、服務與學習的意義</Text>
                        <Text style={ ItemTitleH3 }>(一) 一種哲學—互惠的價值</Text>
                        <Text style={ ItemTitleH3 }>(二) 一種教學法—經驗與反思</Text>
                        <Text style={ ItemTitleH3 }>(三) 一種方案—結合學習目標</Text>
                    </View>
                    <View style={ ViewSubContainer }>
                        <Text style={ ItemTitleH2 }>四、服務與學習(Service-Learning)的定義</Text>
                        <Text style={ ItemTitleH3 }>(一) 以服學課程為基礎的社區服務</Text>
                        <Text style={ ItemTitleH3 }>(二) 統合課堂教學與社區服務活動</Text>
                    </View>
                    <View style={ ViewSubContainer }>
                        <Text style={ ItemTitleH2 }>五、服務與學習的中心要素</Text>
                        <Text style={ ItemTitleH3 }>(一) 互惠(Reciprocity)</Text>
                        <Text style={ ItemTitleH3 }>(二) 反思(Reflection)</Text>
                        <Image style={ ImageStyle10 } resizeMode={'stretch'} source={require('../../img/ServiceLearning.jpg')} />
                    </View>
                <Text style={ ItemTitleH1 }>八、「服務與學習」-實作課修課規定</Text>
                    <View style={ ViewSubContainer }>
                        <Text style={ ItemTitleH2 }>一、實施對象：</Text>
                        <Text style={ ItemTitleH3 }>係規劃本校大學日間部同學(含一年級新生、未修習之轉學(系)生、復學生)共同必修「服務與學習(一)、(二)」課程為一學年(上、下學期，各零學分，必修課程)。</Text>
                        <Text style={ ItemTitleH2 }>二、「實作課」課程內容：</Text>
                        <Text style={ ItemTitleH3}>(一) 實施方式：</Text>
                        <Text style={ ItemTitleH3 }>以安排學生參與校園內服務性工作為主，旨在引導學生身體力行服務工作，亦開放申請多元服務。</Text>
                        <Text style={ ItemTitleH3 }>(二)上課時段：</Text>
                        <Text style={ ItemTitleH3 }>1、校內一般服務：分早上班及下午班，每週服務3天，每天30分鐘為原則。</Text>
                        <Text style={ ItemTitleH3 }>2、校內外展服務：與單位督導人員排班進行服務，服務需滿30小時並繳交反思心得。</Text>
                        <Text style={ ItemTitleH3 }>3、校外多元服務：與機構督導人員排班進行服務，服務需滿30小時並繳交反思心得。</Text>
                        <Text style={ ItemTitleH3 }>(三) 校內一般服務實作時間：</Text>
                        <Text style={ ItemTitleH3 }>1.早上班：A組為星期一至星期三，B組為星期三至星期五，星期三為 A、B 組共同省思日。</Text>
                        <Text style={ ItemTitleH3 }>2.下午班：A組為星期一至星期三，B組為星期二至星期四，星期二及星期三為A、B組共同省思日。</Text>
                        <Image style={ ImageStyle11 } resizeMode={'stretch'} source={require('../../img/ServiceLearning1.png')} />
                        <Text style={ ItemTitleH4 }>註：上課時段將依當學年度課程規劃開設。</Text>
                        <Text style={ ItemTitleH3 }>(四) 校內一般服務編組原則：</Text>
                        <Text style={ ItemTitleH3 }>校內服務依學校環境特性及學生人數，規劃成若干服務小組，服務內容由課服組依實際需要進行規劃與指派。</Text>
                        <Text style={ ItemTitleH3 }>(五) 校內一般服務請假規定：</Text>
                        <Text style={ ItemTitleH3 }>1.學生因故無法出席時，應按照本校學生請假規則辦理請假手續，未經准假而缺席者，一律以曠課論，不得要求補課。</Text>
                        <Text style={ ItemTitleH3 }>2.晚到課依實作時間規定視同遲到或曠課。</Text>
                        <Text style={ ItemTitleH3 }>3.每學期未出席之天數(意指「事假天數」+「病假天數」+「缺曠天數」)總計大於該學期應出席天數之1/2 者，則該學期成績以零分計算。</Text>
                        <Text style={ ItemTitleH2 }>三、成績考核：</Text>
                        <Text style={ ItemTitleH3 }>1.依據學生平時應到/實到/遲到/缺曠次數及請假次數(包含病假、事假)及實作態度、守時度、合作精神、配合度、心得報告及其他之加權總和評定學期總成績。</Text>
                        <Text style={ ItemTitleH3 }>2.學期成績：實作課達60 分以上者為及格(成績將以「及格」或「P」表示)；成績不及格者(成績將以「不及格」或「F」 表示)，需重修。</Text>
                        <Text style={ ItemTitleH3 }>3.大學日間部同學需於畢業前修畢「服務與學習」(一)、(二)課程。</Text>
                        <Text style={ ItemTitleH3 }>4.基本服務學習嚴令禁止學生進行替代行為，一經查核發現，該階段相關同學成績將以零分計算。</Text>
                        <Text style={ ItemTitleH3 }>5.基本服務學習成績表現優良者，由學校發給服務績優獎章(狀)獎勵。</Text>
                        <Text style={ ItemTitleH2 }>四、停修申請作業：</Text>
                        <Text style={ ItemTitleH3 }>依據教務處停修公告辦理。</Text>
                        <Text style={ ItemTitleH2 }>五、重修申請作業：</Text>
                        <Text style={ ItemTitleH3 }>將於「欲重修學期」之「前一學期期初」，依服學組公告辦理；暑期重修相關規定另訂之。</Text>
                        <Text style={ ItemTitleH2 }>六、抵免申請作業：</Text>
                        <Text style={ ItemTitleH3 }>依據教務處課程抵免公告辦理</Text>
                        <Text style={ ItemTitleH3 }>1.若曾於他校已修畢類似課程且成績及格持有原學校證明者，即可提出抵免申請。</Text>
                        <Text style={ ItemTitleH3 }>2.身心障礙之特殊學生，無法從事實作者，得經專簽奉核後，始可抵免「實作課」課程。</Text>
                        <Text style={ ItemTitleH4 }>～～上述事項如有未盡事宜則另行修訂～～</Text>
                    </View>
                <Text style={ ItemTitleH1 }>九、「校外多元服務課程實施方式」說明</Text>
                    <View style={ ViewSubContainer }>
                        <Text style={ ItemTitleH2 }>一、以為提供服務學習實作生多元服務學習機會。</Text>
                        <Text style={ ItemTitleH2 }>係規劃本校大學日間部同學(含一年級新生、未修習之轉學(系)生、復學生)共同必修「服務與學習(一)、(二)」課程為一學年(上、下學期，各零學分，必修課程)。</Text>
                        <Text style={ ItemTitleH2 }>二、多元服務學習申請規定：</Text>
                        <Text style={ ItemTitleH3 }>(一)申請資格：該學期修課學生</Text>
                        <Text style={ ItemTitleH3 }>(二)服務單位：校外政府合法立案之機關、機構、法人等可提供志工服務之單位，且需經服務學習組審核通過始可。</Text>
                        <Text style={ ItemTitleH3 }>(三)	施行時程：</Text>
                        <Text style={ ItemTitleH3 }>1.辦理申請時程：當學期開學前1個月至開學後第1週止。</Text>
                        <Text style={ ItemTitleH3 }>2.公告審核結果：開學後第3週。(公佈於服務學習組網站或公布欄)</Text>
                        <Text style={ ItemTitleH3 }>3.施行時程：自當學期第3週起至第15週止。</Text>

                        <Text style={ ItemTitleH3 }>(四)	時數規定：需於規定之施行時程內服務滿30小時，且每週服務時數最多4小時為限。</Text>
                        <Text style={ ItemTitleH3 }>(五)	申請文件：需檢附亞洲大學多元服務學習申請書。(請至學生事務處服務學習組網站-表單下載區下載)</Text>
                        <Text style={ ItemTitleH3 }>(六)	認證規定</Text>

                        <Text style={ ItemTitleH3 }>1.服務結束後一週內，需繳回認證資料通過複核後，始可登錄成績：</Text>
                        <Text style={ ItemTitleH3 }>(1)多元服務學習時數證明單。</Text>
                        <Text style={ ItemTitleH3 }>(2)多元服務學習反思心得報告(含服務照片至少4張)。</Text>
                        <Text style={ ItemTitleH3 }>(3)多元服務學習問卷調查表。</Text>
                        <Text style={ ItemTitleH3 }>2.本多元服務學習時數不得與各系所規定之實習時數重覆認定。</Text>
                        <Text style={ ItemTitleH3 }>3.依據服務學習施行要點規定，每學期需實作滿30小時，未達時數者，該學期成績不予通過並需重修。</Text>
                        <Text style={ ItemTitleH2 }>三、參加多元服務學習學生凡有不法行為或以他人名義替代服務者，經查證屬實，該生該學期該科不予通過並需重修，且依本校學生獎懲辦法嚴處。</Text>
                        <Text style={ ItemTitleH2 }>四、	依本要點折抵時數之學生，其所填送之各項資料，經查明有虛偽不實者，將依相關規定提出適當懲處並重修本課程。</Text>
                    </View>
            </ScrollView>
        );
    }
}

export default ServiceLearning;
