/* eslint-disable prettier/prettier */
import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SendMessageWelcome } from 'src/auth/application/messages/commands/SendMessageWelcome';
import * as nodemailer from 'nodemailer';

@CommandHandler(SendMessageWelcome)
export class SendMessageWelcomeHandler implements ICommandHandler<SendMessageWelcome>{
    async execute(command: SendMessageWelcome) {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: 'josephherreradelpino@gmail.com',
            pass: 'vuza mdvz nwdd meqw',
          },
        });
        transporter.verify().then(() => {
            Logger.log('Ready for send messages');
        }).catch((error) => { 
            Logger.error('Error in transporter', error);
        });

        const mailOptions = {
            from: "LiveBi",
            to: command.email,
            subject: 'Bienvenido a la familia de LiveBi',
            html: `<h1 styles={color:orange;}>Bienvenido a la familia de LiveBi</h1>
        <p>Gracias por registrarte en nuestra plataforma</p>
        <p>Esperamos que disfrutes de nuestros servicios</p>
        <p>Atentamente</p>
        <p>LiveBi</p>`,
        };

        try {
            await transporter.sendMail(mailOptions);
            Logger.log(`Send message welcome to ${command.email}`);
        } catch (error) {
            console.error('Error al enviar el correo:', error);
        }
        
    }
}