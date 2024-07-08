import { Routes } from '@angular/router';
import { MessageComponent } from '../../components/message/message.component';
import { BirthdayMessageComponent } from '../../components/birthday-message/birthday-message.component';

export const routes: Routes = [
    {
        path: '',
        component: MessageComponent
    },
    {
        path: 'birthday-message',
        component: BirthdayMessageComponent
    }
];
