def add(task,name,desc):

    task.append([name,desc])

    return task


def view_tasks(task):


    for i in task:

        print(i[0])
        print(i[1],"\n","\n")


def delete(task,name):
    j=0
    for i in task:
        if i[0]==name:
            task.pop(j)
            break
        j+=1


tasks=[]
c=""
while True:
    if c=='q':
        break
    c=input("Enter your action: 1(add),2(view),3(delete),q(exit)")
    if c=="1":
        name=input("Enter the name of task:")
        desc=input("Enter the description of task:")
        add(tasks,name,desc)
    elif c=="2":
        view_tasks(tasks)
    elif c=="3":
        name=input("Enter the name of task:")
        delete(tasks,name)
    else:
        print("invalid input")
