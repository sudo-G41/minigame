#include<iostream>
#include<set>
#define QWER(N,n) (((N)-1)>0?((N)-1):(n)-1+(0*((N)=n)))

using namespace std;

int main(){
	int a,b,c,d,e;
	bool f;
	int b_,c_,d_;
	cin >> a;
	b_=b=a;
	c_=c=1;
	d=0;
	while(a>1){
		d++;
		cout<<"a : "<<a<<" -> ";
		if(a&1){
			a=3*a+1;
		}
		else{
			a=a/2;
		}
		cout<<a<<"\n";
	}
	while(b>1){
		cout<<"b : "<<b<<" -> ";
		if(b&1){
			b=3*b+1;
			f=true;
		}
		else{
			b=b/2;
			c=2*c;
			f=false;
		}
		cout<<(b*c)<<'\n';
	}
	int qwer=b*c;
	while(qwer%2==0){
		qwer/=2;
	}
	cout<<"is 2^n?\n"<<qwer;
	d_=3;
	while(d_>1){
		cout<<"b' : "<<b_<<" -> ";
		if((b_/c_)&1){
			b_=3*b_+c_;
		}
		else{
			while((b_/c_)%2==0)
				c_=2*c_;
		}
		for(d_=b_;d_%2==0;d_/=2);
		cout<<b_<<"("<<d_<<","<<c_<<")"<<'\n';
	}
	return 0;
}
