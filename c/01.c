#include <stdio.h>
int m[100][100];
int max(int a,int b){
	return a>b?a:b;
}
int min(int a,int b){
	return a<b?a:b;
}
void knapsack(int v[],int w[],int c,int n){
	int jMax = min(w[n]-1,c);
	int i,j;
	for( j=0;j<=jMax ; j++){
		m[n][j] = 0;
	}

	for(j=w[n] ; j<=c ; j++){
		m[n][j] = v[n];
	}

	for(i=n-1 ; i>1 ; i--){
		jMax = min(w[i]-1,c);
		for(j=0 ; j<=jMax ; j++){
			m[i][j] = m[i+1][j];
		}
		for(j=w[i] ; j<=c ; j++){
			m[i][j] = max(m[i+1][j],m[i+1][j-w[i]]+v[i]);
		}
	}

	m[1][c] = m[2][c];
	if(c>= w[1])
		m[1][c] = max(m[1][c] , m[2][c-w[1]]+v[1]);
	printf("%d\n",m[1][c] );

}

void traceback(int w[],int c ,int n,int x[]){
	int i;
	for(i=1 ; i<n ; i++){
		if(m[i][c] == m[i+1][c])
			x[i] =0;
		else{
			x[i] = 1;
			c-= w[i];
		}
	}
	x[n] = (m[n][c]) ? 1:0;
	for(i=1 ; i<=n ; i++){
		printf("%d",x[i]);
	}
}

void main(){
	int n,c;
	int i,j;
	printf("please input the count ");
	scanf("%d" , &n);
	printf("please input the biggest back " );
	scanf("%d" , &c);
	int w[n+1];
	int v[n+1];
	int x[n+1];
	
	for(i=1 ; i<=n ; i++){
		scanf("%d%d",&w[i],&v[i]);
	}

	knapsack(v,w,c,n);
	traceback(w,c,n,x);

}
