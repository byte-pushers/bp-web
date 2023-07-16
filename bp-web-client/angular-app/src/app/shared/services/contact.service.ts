export interface ContactService {
  getContactInfo(firstName: string, email: string, lastName?: string): Promise<any>;
}
