
Angular: Angular is a framework to build single page applications.
--------

    Framework: Combination of languages and libraries is framework.
    ----------

        Ex: HTML, CSS, JavaScript, TypeScript, Rxjs, Zone.js


    Single Page Application:
    ------------------------
        Single HTML page will be there
        Part of the page will chage WRT user activity.

        Ex: Facebook, Gmail


Angular Project setup:
----------------------
1) Download and install node.js

    check:  node -v
            npm  -v

2) Install angular from npm

    npm install -g @angular/cli

    check: ng v

3) Create new angular project

    ng new my-app

4) Open app in vs-code and start the server.

    ng serve

5) We can see the output in browser:  localhost:4200 


    **) First time we need to give script execution permission to VSCode.

        open powershell as administrator

        then run:  Set-ExecutionPolicy Unrestricted


Frontend Application Architecture:
----------------------------------


Angular Concepts:
-----------------


Routing:
--------

    Angualr is SPA, Routing module helps us to navigate from one view to another view.

    Implementation:
    ---------------
    1) Create path in app-routing.module.ts  ->  routes array
    2) Add <router-outlet> tag in app.component.html (to load router output)

    Types of Routes:
    ----------------

        Four types of routes in Angualr.

        1) General Route:
        -----------------
            {path:'loing', component:LoginComponent}

        2) Empty Route:
        ---------------
            {path:'', component: LoginComponent}

            {path:'', pathMatch:'full', redirectTo:'login'}

        3) Wildcard Route / Fallback Route:
        -----------------------------------
            {path:'**', component: PageNotFoundComponent}

        4) Children Route:
        ------------------
           
           {path:'dashboard', component:DashboardComponent, children:[
                {path:'home', component: HomeComponent}
           ]}
           
           ***) We should give <router-outlet> inside dashboard  
                to load children paths inside dashboard component

    Router Navigation:
    ------------------

        1) From HTML:
        --------------

            <button routerLink="/login">

        2) FROM TS:
        -----------
            1) Inject router service
            2) use navigateByUrl method

                constructor(private router:Router){}

                this.router.navigateByUrl('/dashboard');
    
ANGULR ARCHITECTURE:
--------------------

Data Binding:   Useful to exchange the data between class and tempalte. (ts<->html)
-------------

    We have four types of data bindings.

        1) Interpolation:  TS -> HTML          {{ }}

        2) Property 
           Binding      :  TS -> HTML          [ ] = ""

        3) Event Binding:  TS <- HTML          () = ""

        4) Two Way Binding: TS <-> HTML        [( )] = ""



    TS Variable:
    ------------

        public age:number = 20;

        Variable naming rules:
        ----------------------

        1) Variable name should start with alphabet.

            10thhour

            tenthhour

        2) Name should be descriptive.

            fn, ln

            firstName, lastName

        3) Name should be in camel case.

            first-name, FirstName, fitst_name

            firstName, routerLink, valueAsNumber

        4) Should not use space in between.

            first name

            firstName

        5) Boolean variable names allways starts with "is".

            isIndian, isMale, isShow


    Data Binding:
    -------------

        1) Interpolation:  ts -> HTML
        -----------------

            TO display varaible value in html element.




        


    
        2) Event binding: ts <- HTML

            To capture user event



        








        3) Two-way databinding:  ts <-> HTML

            1. Import FormsModule in app module imports array
            2. Use ngModel at input to bind with varaible

                    symbol: banana in the box  [()]
    

        4) Property bidning:  ts -> HTML

            Assigning value to html/css property.

            <p [ngClass]="">
            <p [ngStyle]="">

            <button [disabled]="true/false">
        

    Directives:
    -----------

        Directives are useful to alter the DOM. (Document Object Model)

        Directives are three types:

            1. Structural Directives
            2. Attribute Directives
            3. Component Directives

        1. Structural Directivees:  Alters the DOM strucure.
        --------------------------

            a) *ngFor: adds the elements iteratively to the DOM.

                <tr *ngFor="let user of users; let i=index">

            b) *ngIF: conditionally show/hide the element.

                <h1 *ngIf="CONDITION">


        2. Attribute Directives: Alter the attribute value dynamically.
        ------------------------

            a) ngStyle: alter css property value dynamically

                <p [ngStyle]="{ color: CONDITION ? 'red' : 'green' }">

            b) ngClass: alter class name dymamically

                <p [ngClass]="{ 'pass': CONDITION, 'fail': CONDITION }">


        3. Component Directives: 
        -------------------------

            In Angular all the components are subset of directives.

            
    PIPES: 
    ------

        Pipes are useful to transform the value from one format to antoher format.

        Symbol: |

        Ex: {{  name  | uppercase  }}
                      | lowercase
                      
                user  | json

                today | date
                today | date:'dd-MM-yy'
 
            of([1,2]) | async


API Integration: Connecting two or more applications through an interface.
----------------

    API fullform:  Application Programming Interface
    -------------

    Type of API: REST API  (Representational state transfer)
    -----------

    REST API Methods:
    -----------------

        1) get: to get the data from server

        2) post: to create data

        3) put: to update data

        4) patch: to update part of data

        5) delete: to delete data


    All possible API calls:
    -----------------------

                    method          Implementaion
                    ------          -------------
    1. all           get            get(URL)  

    2. specific      get            get(URL/id)

    3. filter        get            get( URL?filter=___ );

    4. pagination    get            get( URL?limit=__ & page=___  );

    5. sorting       get            get( URL?sortBy=___ & order=____ );

    6. create        post           post( URL, data );

    7. update        put            put( URL/id, data );

    8. update        patch          patch( URL/id, data );
       few fields

    9. delete        delete         delete( URL/id );



    Data flow:
    ----------




    RXJS:  ( Reactive Extention for JavaScript ) 
    -----

        RXJS is resposible for all async operations in angular.

        RXJS has three features.

            1) Promise 
            2) Observable
            3) Subject

                        Promise                          Observable
                    -------------                     ------------------
            1) Single callback                      1) Multi callback

            2) Executes automatically               2) When ever we subscribe then only 
                                                       it will execute

            3) We can not stop in between           3) We can stop in between using
                                                       unsubscribe method

            4) Less rxjs operator support           4) More rxjs operator support    



                Observable                              Subject
                -----------------                   -----------------

            1) Unicasting                           1) Multicasting

            2) Does not maintain state              2) Mintains state



        Subjects:  
        ---------

            -> Subjects are four types

                                            Listens
                                        ------------------

            1) subject                  only upcoming values

            2) Behaviour subject        one prev value + all upcoming values

            3) Reply subject            all prev values + all upcoming values

            4) Async subject            only latest value



    API Integration steps:
    ----------------------

    1) Import HttpClientModule in AppModule imports array.

        import { HttpClientModule } from '@angular/common/http';

    2) Create vehicle service and inject HttpClient service in constructor.

            ng g s vehicle
    
            constructor( private httpClient: HttpClient ){ }

    3) Create getVehicles method and do api call.
       API will return observable of data.

            getVehicles():Observable<any>{

                this.httpClient.get("URL");

            }

    4) Inject VehicleService in VehicleComponent.
       Subsribe to getVehicles method.

            constructor( private vehicleService: VehicleService ){

                this.vehcileService.getVehicles().subsribe((data:any)=>{
                    this.vehicles = data;
                })

            }

    

Angular Forms:
--------------

Angular has two type of forms

    1. Template driven forms
    2. Reactive forms

    
    TD forms vs reactive forms:
    ---------------------------
    1) In TD forms, both view and logic recides in template.
    
        In recactive forms it's segregated clearly
                view is in template
                logic is in class

    2) Reactive froms provides more features like

            1. valueChanges
            2. dynamic forms
            3. form arrays
            4. input states like
                    touched
                    untouched
                    dirty
                    pristine
                    valid
                    invalid
            5. custom validators   


    Reacive form features:
    -----------------------
    1) FormGroup
    2) Nested FormGroup
    3) FormArray
    4) Dynamic Forms
    5) Form Validations


    1) FormGroup Implementation:
    -----------------------------
        1) Import ReactiveFormsModule in app module

        2) Create FormGroup in ts

        3) Create form view in html

        4) Map the FormGroup with form view.

        5) Whenever submit, check the form value in console.

    5) FormValidations:
    -------------------

        TS:
        ---
            age: new FormGroup('',[Validators.required])

        HTML:
        -----
            <div *ngIf="_______.invalid && ______.touched">

                <p *ngIf="_______.errors?.['required]"> This field is requried </p>

            </div>


            1) Form Group:              userForm.get('age')?

            2) Nested Form Group:       userForm.get('address')?.get('pin')?

            3) Form Array:              cardsFormArray.controls[i]?.get('cvv')?








GIT:
----

1) System one time setup (linking website to system)

    git config --global user.name ""
 
    git config --global user.email ""

2) Project one time setup (linking project with git repository)

    git init

    git remote add origin URL

3) Process

    git add .

    git commit -m "XXXXXXX"

    git push




<!-- Customs:

1) custom pipe
2) custom directive
3) custom data type
4) custom validator
5) Interceptor -->




1. Custom Pipe:
---------------

    1) create:
    ----------

        ng g p price

    2) Implement:
    ------------

        transform(value,...args){
            return "Rs." + value + "/-";
        }

    3) Apply:
    ---------

        {{ product.price | price }}



2. custom directive:
--------------------

    1) create:
    ----------

        ng g d imp

    2) implement:
    -------------

        constructor(private elementRef: ElementRef){

            elementRef.nativeElement.style.color = 'red';

        }

    3) apply:
    ---------
    
        <h1  appImp> calculator </h1>



3. Custom API:
--------------

    1) Create json file in assets

        [
            {},
            {}
        ]

    2) Do api get call to that file

        this.httpClient.get("/assets/products.json");



4. custom data type / custom interface / custom model
-----------------------------------------------------

    1. create:
    ----------

        ng g i product


    2. implement:
    -------------

        export interface Product{
            name: string;
            age:number;
        }

    3. apply:
    ---------
        public products: Product[] = [];

        public product:Product = <Product>{};



Component Communication:
------------------------

    Three ways

        1) parent to child
        2) child to parent
        3) sibling communication

    1) parent to child:
    -------------------

        child.ts
        --------

            @Input public ac:number = 0;

        parent.html
        -----------

            <app-child [ac]="10"></app-child> 


    2) child to parent:
    --------------------

        child.ts
        --------

            @Output() public bEvent:EventEmitter<any> = new EventEmitter();


            send(){
                this.bEvent.emit(20);
            }        


        parent.html:
        ------------

            <app-child (bEvent)="catch($event)"></app-child>



    parent to child
    child to parent
    -----------------


        parent.html:
        ------------

            <app-child [ac]="10" (bEvent)="catch($event)"></app-child>


        child.ts:
        ---------

            @Input public ac:number = 0;

            @Output() public bEvent:EventEmitter<any> = new EventEmitter();
            this.bEvent.emit(20);





    3) Sibling communication:
    -------------------------

        1) Create common service and inject in all the components.
        2) Create subject in service with setValue and getValue methods.
        3) From item call the setValue, nav and cart will get the value.


        create:
        -------
            public countSub:BehaviorSubject<any> = new BehaviorSubject(0);

        set:
        ----
            setValue(){
                this.countSub.next(this.count++);
            }

        get:
        ----
            getValue(){
                return this.countSub.asObservable();
            }
























