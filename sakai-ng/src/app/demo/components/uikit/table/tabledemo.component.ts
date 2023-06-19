import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';

interface expandedRows {
    [key: string]: boolean;
}

interface Company{
    name: string;
    code: string;
}

interface User{
    id: number;
    name: string;
    email: string;
    phone: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }      
    },
    company: Company; 
}


@Component({
    templateUrl: './tabledemo.component.html',
    providers: [MessageService, ConfirmationService]
})
export class TableDemoComponent implements OnInit {
    companies: Company[] = [
        {name: 'Company 1', code: 'C1'},
        {name: 'Company 2', code: 'C2'},
        {name: 'Company 3', code: 'C3'}
    ];

    users: User[] = [
        {id: 1, name: 'Leanne Graham', email: 'test@mail.com',phone: '1234567890',company:this.companies[0], address: {street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {lat: '-37.3159', lng: '81.1496'}}},
        {id: 2, name: 'Ervin Howell', email: 'test2@mail.com',phone: '1234567890',company:this.companies[1], address: {street: 'Kulas Light', suite: 'Apt. 556', city: 'Bogor', zipcode: '92998-3874', geo: {lat: '-37.3159', lng: '81.1496'}}},
        {id: 3, name: 'Clementine Bauch', email: 'test3@mail.com', phone: '1234567890',company:this.companies[1], address: {street: 'Kulas Light', suite: 'Apt. 556', city: 'Depok', zipcode: '92998-3874', geo: {lat: '-37.3159', lng: '81.1496'}}},
        {id: 4, name: 'Patricia Lebsack', email: 'test@testt.com', phone: '1234567890',company:this.companies[0], address: {street: 'Kulas Light', suite: 'Apt. 556', city: 'Bandung', zipcode: '92998-3874', geo: {lat: '-37.3159', lng: '81.1496'}}},
    ];
    companyDipilih: Company = this.companies[0];
    filterCompany(e:any){
        console.log(e);
        this.companyDipilih = e;
        this.users = this.users.filter((user:User) => user.company.code === this.companyDipilih.code);
    };

    customers1: Customer[] = [];

    customers2: Customer[] = [];

    customers3: Customer[] = [];

    selectedCustomers1: Customer[] = [];

    selectedCustomer: Customer = {};

    representatives: Representative[] = [];

    statuses: any[] = [];

    products: Product[] = [];

    rowGroupMetadata: any;

    expandedRows: expandedRows = {};

    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    idFrozen: boolean = false;

    loading: boolean = true;

    @ViewChild('filter') filter!: ElementRef;

    constructor(private customerService: CustomerService, private productService: ProductService) { }

    ngOnInit() {
        this.customerService.getCustomersLarge().then(customers => {
            this.customers1 = customers;
            this.loading = false;

            // @ts-ignore
            this.customers1.forEach(customer => customer.date = new Date(customer.date));
        });
        this.customerService.getCustomersMedium().then(customers => this.customers2 = customers);
        this.customerService.getCustomersLarge().then(customers => this.customers3 = customers);
        this.productService.getProductsWithOrdersSmall().then(data => this.products = data);

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'XuXue Feng', image: 'xuxuefeng.png' }
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    }

    onSort() {
        this.updateRowGroupMetaData();
    }

    updateRowGroupMetaData() {
        this.rowGroupMetadata = {};

        if (this.customers3) {
            for (let i = 0; i < this.customers3.length; i++) {
                const rowData = this.customers3[i];
                const representativeName = rowData?.representative?.name || '';

                if (i === 0) {
                    this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
                }
                else {
                    const previousRowData = this.customers3[i - 1];
                    const previousRowGroup = previousRowData?.representative?.name;
                    if (representativeName === previousRowGroup) {
                        this.rowGroupMetadata[representativeName].size++;
                    }
                    else {
                        this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
                    }
                }
            }
        }
    }

    expandAll() {
        if (!this.isExpanded) {
            this.products.forEach(product => product && product.name ? this.expandedRows[product.name] = true : '');

        } else {
            this.expandedRows = {};
        }
        this.isExpanded = !this.isExpanded;
    }

    formatCurrency(value: number) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }
    bersihkan(table: Table) {
        console.log('Clear filter');
        table.clear();
        this.filter.nativeElement.value = '';
        this.companyDipilih = this.companies[0];
    }
    cari(table: Table, event: Event) {
        console.log('Cari',(event.target as HTMLInputElement).value);
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}