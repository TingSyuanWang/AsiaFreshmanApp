import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card, Button } from 'react-native-elements';


class Homepage extends Component {
    static navigationOptions = {
        title: '首頁'
    };

    render () {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ScrollView>
                    <Card
                        title='關於亞大'
                        image={require('../img/FriendlyCampus.jpg')}
                        titleStyle={{fontSize: 20}}>
                        <Text style={{marginBottom: 10, lineHeight: 20}}>
                            校長的話、校歌
                        </Text>
                        <Button
                            rightIcon={{name: 'forward'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='了解更多'
                            onPress={() => navigate('AboutAsia')} />
                    </Card>
                    <Card
                        title='學習發展'
                        image={require('../img/LearningDevelopment.jpeg')}
                        titleStyle={{fontSize: 20}}>
                        <Text style={{marginBottom: 10, lineHeight: 20}}>
                            選課、學生請假、服務與學習、電子郵件 ＆ 軟體資源、圖書資源、生涯發展與就業輔導、學生實務學習與輔導
                        </Text>
                        <Button
                            rightIcon={{name: 'forward'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='了解更多'
                            onPress={() => navigate('LearningDevelopment')}/>
                    </Card>
                    <Card
                        title='友善校園'
                        image={require('../img/about-asia.jpg')}
                        titleStyle={{fontSize: 20}}>
                        <Text style={{marginBottom: 10, lineHeight: 20}}>
                            兵役緩徵、校園安全、性別平等教育、校園法律宣導、學生申訴
                        </Text>
                        <Button
                            rightIcon={{name: 'forward'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='了解更多'
                            onPress={() => navigate('FriendlyCampus')}/>
                    </Card>
                    <Card
                        title='身心保健'
                        image={require('../img/MentalHealth.jpg')}
                        titleStyle={{fontSize: 20}}>
                        <Text style={{marginBottom: 10, lineHeight: 20}}>
                            健康檢查、諮商輔導 ＆ 資源教室服務
                        </Text>
                        <Button
                            rightIcon={{name: 'forward'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='了解更多'
                            onPress={() => navigate('PhysicalHealth')}/>
                    </Card>
                    <Card
                        title='校園生活'
                        image={require('../img/CampusLife.jpg')}
                        titleStyle={{fontSize: 20}}>
                        <Text style={{marginBottom: 10, lineHeight: 20}}>
                            住宿、社團介紹、總務須知
                        </Text>
                        <Button
                            rightIcon={{name: 'forward'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='了解更多'
                            onPress={() => navigate('CampusLife')}/>
                    </Card>
                    <Card
                        title='安心就學'
                        image={require('../img/SafeLearning.jpg')}
                        titleStyle={{fontSize: 20}}
                        containerStyle={{marginBottom: 25}}>
                        <Text style={{marginBottom: 10, lineHeight: 20}}>
                            紓困關懷、就學優待減免、就學貸款、起飛計畫
                        </Text>
                        <Button
                            rightIcon={{name: 'forward'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='了解更多'
                            onPress={() => navigate('HappySchool')}/>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}

export default Homepage;
