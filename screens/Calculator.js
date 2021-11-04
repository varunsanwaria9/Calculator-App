import React,{ useState } from 'react'
import { View,Text, Pressable } from 'react-native'
import { styles } from './styles'

export default function Calculator() {

	const [value,setValue] = useState("")
	const [result,setResult] = useState("")
    const [action,setAction] = useState("")
	const [isBracketOpen,setBracketOpen] = useState("")

	const useBracket = () => {
		if(isBracketOpen){
			setValue(value+")")
            setBracketOpen(false)
		}
		else{
            setValue(value + "(")
            setBracketOpen(true)
        }
	}

    const insertNumber = number => setValue(value + number)

    const allClear = () => {
        setValue("")
        setResult("")
        setAction("")
    }

    const method = method => {
        if(result === ""){
            setResult(value)
            setValue("")
        }
        if(action && value){
            getResult()
        }
        switch (method) {
            case 1:
                setAction("/")
                break;
            case 2:
                setAction("*")
                break;
            case 3:
                setAction("-")
                break;
            case 4:
                setAction("+")
                break;
        }
    }

    const getResult = () => {
        if(value){
            if(result && action){
                setResult(eval(`${result} ${action} ${value}`));
                setValue("")
                setAction("")
            }
        }
    }

    const clearVal = () => setValue(value.slice(0,-1))

    const usePercent = () => {
        if(value){
            setValue(eval(`${value} / 100`))
        }
    }

	return (
        <View style={styles.mainBody}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Calculator</Text>
            </View>
            <View style={styles.head}>
                <View style={styles.tophead}>
                    <Text style={[value ? styles.head1Text : styles.head2Text,styles.color3]}>{result}</Text>
                    <Text style={[styles.head2Text,styles.color3]}>{value}</Text>
                </View>
                <View style={styles.bottomhead}>
                    <Text style={[styles.head3Text,styles.color3]}>{action}</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyPart1}>
                    <Pressable style={[styles.btn,styles.color1]} onPress={allClear}>
                        <Text style={styles.btnText}>AC</Text>
                    </Pressable>
                    <Pressable style={[styles.btn,styles.color2]} onPress={useBracket}>
                        <Text style={styles.btnText}>()</Text>
                    </Pressable>
                    <Pressable style={[styles.btn,styles.color2]} onPress={usePercent}>
                        <Text style={styles.btnText}>%</Text>
                    </Pressable>
                    <Pressable style={[styles.btn,styles.color2]} onPress={() => method(1)}>
                        <Text style={styles.btnText}>/</Text>
                    </Pressable>
                </View>
                <View style={styles.bodyPart1}>
                    <Pressable style={[styles.btn,styles.color3]} onPress={() => insertNumber(7)}>
                        <Text style={[styles.color3,styles.btnText]}>7</Text>
                    </Pressable>
                    <Pressable style={[styles.btn,styles.color3]} onPress={() => insertNumber(8)}>
                        <Text style={[styles.color3,styles.btnText]}>8</Text>
                    </Pressable>
                    <Pressable style={[styles.btn,styles.color3]} onPress={() => insertNumber(9)}>
                        <Text style={[styles.color3,styles.btnText]}>9</Text>
                    </Pressable>
                    <Pressable style={[styles.btn,styles.color2]} onPress={() => method(2)}>
                        <Text style={styles.btnText}>x</Text>
                    </Pressable>
                </View>
                <View style={styles.bodyPart1}>
                    <Pressable style={[styles.btn,styles.color3]} onPress={() => insertNumber(4)}>
                        <Text style={[styles.color3,styles.btnText]}>4</Text>
                    </Pressable>
                    <Pressable style={[styles.btn,styles.color3]} onPress={() => insertNumber(5)}>
                        <Text style={[styles.color3,styles.btnText]}>5</Text>
                    </Pressable>
                    <Pressable style={[styles.btn,styles.color3]} onPress={() => insertNumber(6)}>
                        <Text style={[styles.color3,styles.btnText]}>6</Text>
                    </Pressable>
                    <Pressable style={[styles.btn,styles.color2]} onPress={() => method(3)}>
                        <Text style={styles.btnText}>-</Text>
                    </Pressable>
                </View>
                <View style={styles.bodyPart1}>
                    <Pressable style={[styles.btn,styles.color3]} onPress={() => insertNumber(1)}>
                        <Text style={[styles.color3,styles.btnText]}>1</Text>
                    </Pressable>
                    <Pressable style={[styles.btn,styles.color3]} onPress={() => insertNumber(2)}>
                        <Text style={[styles.color3,styles.btnText]}>2</Text>
                    </Pressable>
                    <Pressable style={[styles.btn,styles.color3]} onPress={() => insertNumber(3)}>
                        <Text style={[styles.color3,styles.btnText]}>3</Text>
                    </Pressable>
                    <Pressable style={[styles.btn,styles.color2]} onPress={() => method(4)}>
                        <Text style={styles.btnText}>+</Text>
                    </Pressable>
                </View>
                <View style={styles.bodyPart1}>
                    <Pressable style={[styles.btn,styles.color3]} onPress={() => insertNumber(0)}>
                        <Text style={[styles.color3,styles.btnText]}>0</Text>
                    </Pressable>
                    <Pressable style={[styles.btn,styles.color3]} onPress={() => insertNumber(".")}>
                        <Text style={[styles.color3,styles.btnText]}>.</Text>
                    </Pressable>
                    <Pressable style={[styles.btn,styles.color3]} onPress={clearVal}>
                        <Text style={[styles.color3,styles.btnText]}>C</Text>
                    </Pressable>
                    <Pressable style={[styles.btn,styles.color2]} onPress={getResult}>
                        <Text style={styles.btnText}>=</Text>
                    </Pressable>
                </View>
            </View>
        </View>
)}
