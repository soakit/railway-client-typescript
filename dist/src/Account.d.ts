import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/bindCallback';
import { Manager } from './Manager';
export interface Options {
    performance?: any;
}
export declare class Account {
    private manager;
    userName: string;
    private userPassword;
    options: Options;
    private checkUserTimer;
    private scptCheckUserTimer?;
    private stations;
    private passengers?;
    private SYSTEM_BUSSY;
    private SYSTEM_MOVED;
    private rawRequest;
    private request;
    private cookiejar;
    headers: object;
    private TICKET_TITLE;
    private query;
    private orders;
    constructor(name: string, userPassword: string, manager: Manager, options?: Options);
    /**
     * 检查网络异常
     */
    private isSystemBussy(body);
    setRequest(): void;
    private nextOrderNum;
    private nextOrder();
    private currentOrder();
    createOrder(trainDates: Array<string>, backTrainDate: string, [fromStationName, toStationName, passStationName]: [any, any, any], planTrains: Array<string>, planPepoles: Array<string>, seatClasses: Array<string>): this;
    submit(): void;
    orderWaitTime(): void;
    cancelOrderQueue(): void;
    destroy(): void;
    private observableCheckCaptcha();
    private observableLogin();
    private observableNewAppToken();
    private observableAppToken(newapptk);
    observableLoginInit(): Observable<string>;
    /**
     * 数组多关键字段排序算法，字段默认为递减排序，如果字段前面带有+符号则为递增排序
     */
    private fieldSorter(fields);
    private buildQueryLeftTicketFlow(order);
    private recursiveQueryLeftTicket();
    private observableGetPassengers(order);
    private observableGetPassCodeNew(order);
    private buildOrderFlow();
    private observableCheckUser();
    private obsQueryOrderWaitT(order);
    /**
     * 查询列车余票信息
     *
     * @param trainDate 乘车日期
     * @param fromStationName 出发站
     * @param toStationName 到达站
     * @param trainNames 列车
     *
     * @return Promise
     */
    queryLeftTickets(trainDate: string, fromStation: string, toStation: string, trainNames?: ReadonlyArray<string>): Observable<Array<any>>;
    /**
     * 查询列车余票信息
     *
     * @param trainDate 乘车日期
     * @param fromStationName 出发站
     * @param toStationName 到达站
     * @param passStationName 途经站
     * @param trainNames 列车
     * @param f 车次过滤条件
     * @param t 时间过滤条件
     *
     * @return void
     */
    leftTickets([trainDate, fromStationName, toStationName, passStationName]: [any, any, any, any], {filter, f, time, t, orderby, o}: {
        filter: any;
        f: any;
        time: any;
        t: any;
        orderby: any;
        o: any;
    }): void;
    private renderTrainListTitle(trains);
    private renderLeftTickets(trains);
    myOrderNoCompleteReport(): void;
    loginInit(): Observable<void>;
    private getCaptcha();
    private questionCaptcha();
    private checkCaptcha();
    private userAuthenticate();
    private getNewAppToken();
    private getAppToken(newapptk);
    private checkAuthentication(cookies);
    private leftTicketInit();
    private queryLeftTicket({trainDate, fromStation, toStation});
    private checkUser();
    private submitOrderRequest({trainSecretStr, trainDate, backTrainDate, fromStationName, toStationName});
    private confirmPassengerInitDc();
    private getPassengers(token);
    private getPassengerTickets(seatType, passengers, planPepoles);
    private getOldPassengers(passengers, planPepoles);
    private checkOrderInfo(submitToken, seatType, passengers, planPepoles);
    private getQueueCount(token, seatType, orderRequestDTO, ticketInfo);
    private getPassCodeNew();
    private checkRandCodeAnsyn();
    private confirmSingleForQueue(token, seatType, passengers, ticketInfoForPassengerForm, planPepoles);
    private queryOrderWaitTime(token);
    private cancelQueueNoCompleteOrder();
    private initNoComplete();
    myOrderNoComplete(): void;
    private printMyOrderNoComplete(x);
    private queryMyOrderNoComplete();
    /**
    <div class="t-btn">
  {{if pay_flag=='Y'}}
         <div class="btn"><a href="#nogo" id="continuePayNoMyComplete" onclick="contiuePayNoCompleteOrder('{{>sequence_no}}','pay')"  class="btn92s">继续支付</a></div>
         <div class="btn"><a href="#nogo" onclick="cancelMyOrder('{{>sequence_no}}','cancel_order')" id="cancel_button_pay" class="btn92">取消订单</a></div>
  {{/if}}
  {{if pay_resign_flag=='Y'}}
         <div class="btn"><a href="#nogo" id="continuePayNoMyComplete" onclick="contiuePayNoCompleteOrder('{{>sequence_no}}','resign');"  class="btn92s">继续支付</a></div>
         <div class="btn"><a href="#nogo" onclick="cancelMyOrder('{{>sequence_no}}','cancel_resign')" class="btn92">取消订单</a></div>
  {{/if}}
  
          </div>
    */
    private cancelNoCompleteMyOrder(sequenceNo, cancelId?);
    cancelNoCompleteOrder(sequenceNo: string, cancelId?: string): void;
}
