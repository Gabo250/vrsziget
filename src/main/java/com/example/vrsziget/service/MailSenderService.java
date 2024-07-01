package com.example.vrsziget.service;


import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;


@Service
public class MailSenderService {
    private JavaMailSender sender;

    @Autowired
    public void setSender(JavaMailSender sender) {
        this.sender = sender;
    }

    public void sendEmail(String to, String confUrl, String cancUrl, String name) throws MessagingException {
        MimeMessage mimeMessage = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
        String html = "<html lang=\"hu\"" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Foglalás Megerősítése!</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <h1>Kedves " + name + "!" + "</h1>\n" +
                "    <p>\n" +
                "        Kérlek hagyd jóvá a foglalásod az alábbi linken keresztűl!\n" +
                "    </p>\n" +
                "    <p style=\"padding: 10px;\">" + "https://vrsziget21.hu/" + confUrl +  "</p>\n" +
                "    <p>\n" +
                "        Ha bármilyen problémád lenne a foglalásoddal, az alábbi linken keresztül lemondhatod!\n" +
                "    </p>\n" +
                "    <p style=\"padding: 10px;\">" + "https://vrsziget21.hu/" + cancUrl + "</p>\n" +
                "    <p>Üdvözlettel:</p> " +
                "    <h2>VRsziget csapata</h2>" +
                "</body>\n" +
                "</html>";

        helper.setText(html, true);
        helper.setTo(to);
        helper.setSubject("Foglalás megerősítés");
        helper.setFrom("ggaborr1@gmail.com");

        sender.send(mimeMessage);
    }
}
