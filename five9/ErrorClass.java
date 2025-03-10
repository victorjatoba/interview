import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ErrorClass {
    private Object object1 = new Object();
    private Object object2 = new Object();
    private List<Integer> list;

    public ErrorClass() {
        list = new ArrayList<>();
    }

    public void addToList(int value) {
        list.add(value);
    }

    public void useCollection() {
        // numbers is never been used.
        ArrayList<int> numbers = new ArrayList<>();
    }

    public void stringMutateAndPrint(String value) {
        // the value could be null and throw NPE below
        String result = value.toUpperCase();
        System.out.println(result);
    }


    public void method1() {
        synchronized (object1) {
            System.out.println("Acquired lock on object1");
            synchronized (object2) {
                System.out.println("Acquired lock on object2");
                // Do some task
            }
        }
    }

    public void method2() {
        synchronized (object2) {
            System.out.println("Acquired lock on object2");
            synchronized (object1) {
                System.out.println("Acquired lock on object1");
                // Do some task
            }
        }
    }

    public static void main(String[] args) {
        ErrorClass errorClass = new ErrorClass();

        ArrayList<Integer> keyList = new ArrayList<>();
        keyList.add(1);
        Map map = new HashMap();
        map.put(keyList, "Value");

        // it's doing nothing
        errorClass.useCollection();

        Runnable runnable = () -> {
            for (int i = 0; i < 5; i++) {
                errorClass.addToList(i);
            }
        };

        Thread thread1 = new Thread(runnable);
        Thread thread2 = new Thread(runnable);
        thread1.start();
        thread2.start();

        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // list is private
        System.out.println("Mutable list after modification: " + errorClass.list);

        errorClass.stringMutateAndPrint(null);

        Thread thread3 = new Thread(() -> errorClass.method1());
        Thread thread4 = new Thread(() -> errorClass.method2());
        thread3.start();
        thread4.start();
    }
}
