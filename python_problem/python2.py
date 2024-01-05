#함수 이름은 변경 가능합니다.

student_info = [] 

##############  menu 1
def Menu1(input_info): #매개변수가 필요한지 판단 후 코딩할 것
    #사전에 학생 정보 저장하는 코딩 
    input_info[1] = int(input_info[1])
    input_info[2] = int(input_info[2])
    student_dic = {"name" : input_info[0],"mid_score" : input_info[1], "final_score" : input_info[2]}
    student_info.append(student_dic)


##############  menu 2
def Menu2():#매개변수가 필요한지 판단 후 코딩할 것) :
    #학점 부여 하는 코딩
    for student in student_info:
        if("grade" not in student):
            avg_score = (student["mid_score"] + student["final_score"])/2
            if(avg_score >= 90):
                student["grade"] = "A"
            elif(avg_score >=80):
                student["grade"] = "B"
            elif(avg_score >=70):
                student["grade"] = "C"
            else:
                student["grade"] = "D"
        else: continue

##############  menu 3
def Menu3(): #매개변수가 필요한지 판단 후 코딩할 것) 
    #출력 코딩
    print("-----------------------------")
    print("name   mid   final   grade")
    print("-----------------------------")
    for student in student_info:
      print("%-8s%-8d%-8d%-8s"%(student["name"],student["mid_score"],student["final_score"],student["grade"]))
        

##############  menu 4
def Menu4(student_name):#매개변수가 필요한지 판단 후 코딩할 것):
    #학생 정보 삭제하는 코딩
    for student in student_info:
        if student["name"] == student_name:
            student_info.remove(student)
            return
    
#학생 정보를 저장할 변수 초기화
student_info = []
print("*Menu*******************************")
print("1. Inserting students Info(name score1 score2)")
print("2. Grading")
print("3. Printing students Info")
print("4. Deleting students Info")
print("5. Exit program")
print("*************************************")
while True :
    choice = input("Choose menu 1, 2, 3, 4, 5 : ")
    if choice == "1" :
        #학생 정보 입력받기
        input_info = input("Enter name mid-score final-score : ").split()

        name_list = [student["name"] for student in student_info]

        #예외사항 처리(데이터 입력 갯수, 이미 존재하는 이름, 입력 점수 값이 양의 정수인지)
        if(len(input_info) != 3):
            print("Num of data is not 3!")
            continue
        elif(input_info[0] in name_list):
            print("Already exist name!")
            continue
        elif("." in input_info[1] or "." in input_info[2]):
            print("Score is not positive integer!")
            continue
        #예외사항이 아닌 입력인 경우 1번 함수 호출 
        Menu1(input_info)

    elif choice == "2" :
        #예외사항 처리(저장된 학생 정보의 유무)
        if(not student_info): 
            print("No student data!")
            continue
        #예외사항이 아닌 경우 2번 함수 호출
        Menu2()
        #"Grading to all students." 출력
        print("Grading to all students.")


    elif choice == "3" :
        #예외사항 처리(저장된 학생 정보의 유무, 저장되어 있는 학생들의 학점이 모두 부여되어 있는지)
        flag = 0
        if(not student_info): 
            print("No student data!")
            continue
        for student in student_info:
            if(len(student) == 3):
                print("There is a student who didn't get grade.")
                flag = 1
                break
        #예외사항이 아닌 경우 3번 함수 호출
        if(not flag):
            Menu3()

    elif choice == "4" :
        #예외사항 처리(저장된 학생 정보의 유무)
        if(not student_info): 
            print("No student data!")
            continue
        #예외사항이 아닌 경우, 삭제할 학생 이름 입력 받기
        student_name = input("Enter the name to delete : ")
        #입력 받은 학생의 존재 유무 체크 후, 없으면 "Not exist name!" 출력
        name_list = [student["name"] for student in student_info]
        if(student_name not in name_list):
            print("Not exist name!")
            continue
        #있으면(예를 들어 kim 이라 하면), 4번 함수 호출 후에 "kim student information is deleted." 출력
        Menu4(student_name)
        print(student_name," student information is deleted.")

    elif choice == "5" : 
        #프로그램 종료 메세지 출력
        print("Exit Program!")
        #반복문 종료
        break

    else :
        #"Wrong number. Choose again." 출력
        print("Wrong number. Choose again.")