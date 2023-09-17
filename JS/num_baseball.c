#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

int count = 10;
int answer[4];

void init(void)
{
	int c[10] = {0,};
	answer[0] = rand() % 10;
	c[answer[0]]++;
	for(int i = 1; i <= 4; i++)
	{
		answer[i] = rand() % 10;
		if(c[answer[i]] == 1)
			i--;
		else
			c[answer[i]]++;
	}
}

void reset(void){
	count = 10;
	init();
}

void hint(void){
	int h[5] = {0,};
	int check[10] = {0,};
	h[0] = answer[rand() % 4];
	check[h[0]]++;
	for(int i = 1; i < 5; i++)
	{
		int x = rand() % 10;
		if(check[x] == 0)
		{
			h[i] = x;
			check[x]++;
		}
		else
			i--;
	}
	for(int i = 0; i < 5; i++)
		for(int j = i + 1; j < 5; j++)
			if(h[i] < h[j])
			{
				int temp = h[i];
				h[i] = h[j];
				h[j] = temp;
			}
	for(int i = 0; i < 5; i++)
		printf("%d ",h[i]);
}

int error_check(char num[])
{
	int len = strlen(num);
	if(len != 4)
	{
		printf("숫자 4자리를 입력하세요!\n");
		return 0;
	}
	for(int i = 0; i < 4; i++)
		for(int j = i + 1; j < 4; j++)
			if(num[i] == num[j])
			{
				printf("숫자가 중복됩니다!\n");
				return (0);
			}
	return (1);
}

int count_strike(char num[], int answer[])
{
	int c = 0;
	for(int i = 0; i < 4; i++)
		if(num[i] - '0' == answer[i])
			c++;
	return c;
}

int count_ball(char num[], int answer[])
{
	int c = 0;
	for(int i = 0; i < 4; i++)
		for(int j = 0; j < 4; j++)
		{
			if(i != j && num[i] - '0' == answer[j])
				c++;
		}
	return c;
}

int main(void)
{
	srand((unsigned)time(NULL));
	init();
	while(count > 0)
	{
		printf("입력 가능 횟수: %d\n",count);
		printf("숫자 4개를 입력하세요(리셋:r, 힌트:h):");
		char num[5];
		scanf("%s",num);
		int strike = 0;
		int ball = 0;
		if(num[0] == 'r')
		{
			reset();
			continue;
		}
		if(num[0] == 'h')
		{
			hint();
			continue;
		}
		if(error_check(num) == 0)
			continue;
		strike = count_strike(num,answer);
		if(strike == 4)
			break;
		ball = count_ball(num,answer);
		printf("%d 스트라이크, %d 볼입니다.\n",strike,ball);
		count--;
	}
	if(count != 0)
		printf("홈런!!!\n");
	else
		printf("횟수 초과!!! 정답은 %d%d%d%d입니다.\n",answer[0],answer[1],answer[2],answer[3]);
	return (0);
}

