/**********************************************************************************
 * MIT License                                                                    *
 *                                                                                *
 * Copyright (c) 2021 Hyperjump Technology                                        *
 *                                                                                *
 * Permission is hereby granted, free of charge, to any person obtaining a copy   *
 * of this software and associated documentation files (the "Software"), to deal  *
 * in the Software without restriction, including without limitation the rights   *
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell      *
 * copies of the Software, and to permit persons to whom the Software is          *
 * furnished to do so, subject to the following conditions:                       *
 *                                                                                *
 * The above copyright notice and this permission notice shall be included in all *
 * copies or substantial portions of the Software.                                *
 *                                                                                *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR     *
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,       *
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE    *
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER         *
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  *
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  *
 * SOFTWARE.                                                                      *
 **********************************************************************************/

import Mailgun from 'mailgun.js'
import formData from 'form-data'
import { MailgunData } from '../../../interfaces/data'
import { SendInput } from '../../../interfaces/mailgun'
import { Notification } from '../../../interfaces/notification'

export const sendMailgun = async (
  inputData: SendInput,
  notifConfigItem: Notification
) => {
  const { subject, body, sender, recipients } = inputData
  const { data: mailgunConfigData } = notifConfigItem
  const USERNAME = (mailgunConfigData as MailgunData)?.username || 'api'
  const DOMAIN = (mailgunConfigData as MailgunData)?.domain
  const API_KEY = (mailgunConfigData as MailgunData)?.apiKey

  const mailgun = new Mailgun(formData)
  const mg = mailgun.client({ username: USERNAME, key: API_KEY })
  const data = {
    from: `${sender.name} <${sender.email}>`,
    to: recipients,
    subject: subject,
    text: body,
  }
  return mg.messages.create(DOMAIN, data)
}
