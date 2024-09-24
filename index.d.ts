import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export declare class CardLinkOriginal extends AwesomeCordovaNativePlugin {
    establishWSS(arg0: string): Promise<any>;
    isConnectedWSS(): Promise<any>;
    sendRequestSMSCodeMessage(): Promise<any>;
}

export declare const CardLink: CardLinkOriginal;